import Data from './Data';
import PageResources from './PageResources';
import PathContext from './PathContext';

export interface PageProps {
  data: Data;
  location: Location;
  pageResources?: PageResources;
  pathContext: PathContext;
}

export default PageProps;
