import { getWpBlogPosts } from "../helper/getWpBlogPosts";
import Link from "next/link";
import Loader from "../components/global/Loader";
import Image from "next/image";
import { getFeaturedMedia } from "../helper/getFeaturedMedia";

export default async function Blog() {
  const posts = await getWpBlogPosts();
  const fetchMediaForPost = async (post) => {
    const media = await getFeaturedMedia(post.featured_media);
    return media;
  };
  return (
    <div className="pt-[50px] lg:pt-0 max-w-[1440px] mx-auto">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-[100px] sm:text-[120px] lg:text-[190px] 2xl:text-[227px] max-w-[760px] md:max-w-[750px] lg:max-w-[1180px] 2xl:max-w-[1397px] font-epilogue font-medium leading-[1em] tracking-[-0.05em] py-6 px-4">
          The Blog
        </h1>
      </div>
      {!posts ? (
        <div className="items-center justify-center flex flex-col">
          <div>
            <Loader />
          </div>
        </div>
      ) : (
        <ul className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-4 gap-4 py-16 grid-flow-row">
          {posts.map(async (post) => {
            const media = await fetchMediaForPost(post);
            return (
              <Link
                href="/blog/[postId]"
                as={`/blog/${post.id}`}
                key={post.id}
                className="group col-span-1 flex flex-col"
              >
                <div className="relative flex-shrink-0 h-60 overflow-hidden min-h-[400px]">
                  <Image
                    src={media.source_url}
                    alt={media.alt_text}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-all ease-in-out duration-[2]"
                  />
                </div>{" "}
                <div className="flex-grow flex flex-col justify-between p-4">
                  <h3 className="font-epilogue text-[2.25em] leading-[1em] tracking-[-0.05em] group-hover:font-semibold transition-all ease-in-out duration-[2] line-clamp-2">
                    {post.title.rendered}
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered,
                    }}
                    className="mt-2 font-opensauce leading-[1em] tracking-[-0.05em] group-hover:underline transition-all ease-in-out duration-[2] line-clamp-3"
                  />
                  <p className="text-gray-600 font-opensauce leading-[1em] tracking-[-0.05em] mt-4 uppercase">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}
