import { Frontmatter } from './Frontmatter';

export interface Post {
  id: number;
  excerpt: string;
  html: string;
  frontmatter: Frontmatter;
  fields: {
    slug: string;
  };
  timeToRead: number;
}

export default Post;
