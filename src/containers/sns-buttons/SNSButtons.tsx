import React from 'react';
import { Link } from 'gatsby';

import { Button } from '@seolhun/localize-components-atomic';

const SNSButtons = () => {
  return (
    <div>
      <Link to='/contact'>
        <Button>Contact</Button>
      </Link>
      <Link to='/contents'>
        <Button>Contents</Button>
      </Link>
      <Link to='/tags'>
        <Button>Tags</Button>
      </Link>
      <Link to='/categories'>
        <Button>Categories</Button>
      </Link>
    </div>
  );
}

export default SNSButtons;
