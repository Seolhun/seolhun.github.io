import { Post } from './Post';

export interface PathContext {
  posts: Post[];
  tags?: string[];
  categories?: string[];
  categoryName: string;
  tagsName?: string;
  next: any;
  prev: any;
}

export default PathContext;
