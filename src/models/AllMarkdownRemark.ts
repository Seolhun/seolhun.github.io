import { Post } from './Post';

export interface Edge {
  node: Post;
}

export interface AllMarkdownRemark {
  totalCount: number;
  edges: Edge[];
}

export default AllMarkdownRemark;
