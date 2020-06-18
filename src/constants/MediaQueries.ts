import { createMediaQuery } from '@/components';

const MEDIA_QUERIES = {
  XL: createMediaQuery('XL'),
  LG: createMediaQuery('LG'),
  MD: createMediaQuery('MD'),
  SM: createMediaQuery('SM'),
  XS: createMediaQuery('XS'),
};

export {
  MEDIA_QUERIES,
};
export default MEDIA_QUERIES;
