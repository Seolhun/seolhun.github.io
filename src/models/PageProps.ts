import Data from './Data';
import PageResources from './PageResources';
import PathContext from './PathContext';

interface PageProps {
  data: Data;
  location: Location;
  pageResources?: PageResources;
  pathContext: PathContext;
}

export default PageProps;
