import { Frontmatter } from './Frontmatter';

export interface Post {
  excerpt: string;
  fields: {
    slug: string;
  };
  frontmatter: Frontmatter;
  html: string;
  id: number;
  timeToRead: number;
}

export default Post;
