import { createStore as reduxCreateStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

/*
 * action types
 */

const SET_NAVIGATOR_POSITION = 'SET_NAVIGATOR_POSITION';
const SET_NAVIGATOR_SHAPE = 'SET_NAVIGATOR_SHAPE';
const SET_NAVIGATOR_FILTER = 'SET_NAVIGATOR_FILTER';
const SET_IS_WIDE_SCREEN = 'SET_IS_WIDE_SCREEN';
const SET_SCROLL_TO_TOP = 'SET_SCROLL_TO_TOP';
const SET_FONT_SIZE_INCREASE = 'SET_FONT_SIZE_INCREASE';
const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';

/*
 * action creators
 */

export function setNavigatorPosition(payload) {
  return { type: SET_NAVIGATOR_POSITION, payload };
}

export function setNavigatorShape(payload) {
  return { type: SET_NAVIGATOR_SHAPE, payload };
}

export function setNavigatorFilter(payload) {
  return { type: SET_NAVIGATOR_FILTER, payload };
}

export function setIsWideScreen(payload) {
  return { type: SET_IS_WIDE_SCREEN, payload };
}

export function setScrollToTop(payload) {
  return { type: SET_SCROLL_TO_TOP, payload };
}

export function setFontSizeIncrease(payload) {
  return { type: SET_FONT_SIZE_INCREASE, payload };
}

export function setCategoryFilter(payload) {
  return { type: SET_CATEGORY_FILTER, payload };
}

/*
 * reducer
 */
const reducer = (state, action) => {
  switch (action.type) {
    case SET_NAVIGATOR_POSITION:
      return {
        ...state,
        navigatorPosition: action.payload,
      };

    case SET_NAVIGATOR_SHAPE:
      return {
        ...state,
        navigatorShape: action.payload,
      };

    case SET_NAVIGATOR_FILTER:
      return {
        ...state,
        navigatorFilter: action.payload,
      };

    case SET_IS_WIDE_SCREEN:
      return {
        ...state,
        isWideScreen: action.payload,
      };

    case SET_SCROLL_TO_TOP:
      return {
        ...state,
        scrollToTop: action.payload,
      };

    case SET_FONT_SIZE_INCREASE:
      return {
        ...state,
        fontSizeIncrease: action.payload,
      };

    case SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  navigatorPosition: 'is-aside',
  navigatorShape: 'open',
  navigatorFilter: '',
  isWideScreen: false,
  scrollToTop: false,
  fontSizeIncrease: 1,
  categoryFilter: 'all posts',
};

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
export default createStore;
