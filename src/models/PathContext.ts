import Post from "./Post";

interface PathContext {
  posts: Post[];

  tags?: string[];
  categories?: string[];
  categoryName: string;
  tagName?: string;
  next: any;
  prev: any;
}

export default PathContext;
