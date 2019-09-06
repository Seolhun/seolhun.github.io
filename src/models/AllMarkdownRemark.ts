import Post from './Post';

interface AllMarkdownRemark {
  totalCount: number;
  edges: Array<{ node: Post }>;
}

export default AllMarkdownRemark;
