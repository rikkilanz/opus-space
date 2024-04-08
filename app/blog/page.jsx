import getWpBlogPosts from "../helper/getWpBlogPosts";
import Link from "next/link";

export default async function Blog() {
  const posts = await getWpBlogPosts();
  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts.map((post) => {
          return (
            <Link href="/blog/[postId]" as={`/blog/${post.id}`} key={post.id}>
              {post.title.rendered}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
