import Post from './Post';

export interface PathContext {
  posts: Post[];
  tags?: string[];
  categories?: string[];
  categoryName: string;
  tagName?: string;
  next: any;
  prev: any;
}

export default PathContext;
