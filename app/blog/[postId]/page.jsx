import { getWpBlogPosts } from "../../helper/getWpBlogPosts";
import { getSinglePost } from "../../helper/getSinglePost";

export async function generateStaticParams() {
  const posts = await getWpBlogPosts();

  return posts.map((post) => ({
    postId: post.id.toString(),
  }));
}

export default async function BlogDetails({ params }) {
  const post = await getSinglePost(params.postId);
  return <div className="pt-[50px] lg:pt-0">{post.title.rendered}</div>;
}
