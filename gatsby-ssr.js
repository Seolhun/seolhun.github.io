import { JssProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import React from 'react';

require('dotenv').config();

import getPageContext from './src/getPageContext';
import createStore from './src/state/store';
import theme from './src/styles/theme';

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const pageContext = getPageContext();
  const store = createStore();

  replaceBodyHTMLString(
    renderToString(
      <Provider store={store}>
        <JssProvider
          registry={pageContext.sheetsRegistry}
          generateClassName={pageContext.generateClassName}
        >
          {React.cloneElement(bodyComponent, {
            pageContext,
          })}
        </JssProvider>
      </Provider>
    )
  );

  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{
        __html: pageContext.sheetsRegistry.toString(),
      }}
    />,
  ]);
};

exports.onRenderBody = ({ setHeadComponents }) => {
  return setHeadComponents([]);
};

exports.onRenderBody = ({ setPostBodyComponents }) => {
  return setPostBodyComponents([
    <script
      key="webfontsloader-setup"
      dangerouslySetInnerHTML={{
        __html: `
        WebFontConfig = {
          google: {
            families: ["${theme.base.fonts.styledFamily}:${
          theme.base.fonts.styledFonts
        }"]
          }
        };

        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        >
        </script>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-2426948628431849",
            enable_page_level_ads: true
          });
        </script>
      `,
      }}
    />,
  ]);
};
