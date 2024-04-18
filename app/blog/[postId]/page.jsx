import { getWpBlogPosts } from "../../helper/getWpBlogPosts";
import { getSinglePost } from "../../helper/getSinglePost";
import { getFeaturedMedia } from "@/app/helper/getFeaturedMedia";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getWpBlogPosts();

  return posts.map((post) => ({
    postId: post.id.toString(),
  }));
}

const fetchMediaForPost = async (post) => {
  const media = await getFeaturedMedia(post.featured_media);
  return media;
};

export default async function BlogDetails({ params }) {
  const post = await getSinglePost(params.postId);
  const media = await fetchMediaForPost(post);
  return (
    <div>
      <section key={post.id}>
        <div className="relative flex-shrink-0 overflow-hidden min-h-[500px] max-w-[1440px] mx-auto rounded-lg mt-8">
          <Image
            src={media.source_url}
            alt={media.alt_text}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-all ease-in-out duration-[2]"
          />
        </div>{" "}
        <div className="flex flex-col mt-[32px] max-w-[1440px] mx-auto">
          <h1 className="text-left lg:text-center text-[40px] md:text-[60px] lg:text-[100px] font-epilogue font-medium leading-[1em] tracking-[-0.05em] py-6 px-4">
            {post.title.rendered}
          </h1>
          <h2
            className="text-[16px] md:text-[20px] lg:text-[32px] text-left leading lg:text-center font-epilogue font-medium mt-[20px] leading-[1em] tracking-[-0.05em] px-4"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />
          <p className="text-gray-600 font-opensauce leading-[1em] tracking-[-0.05em] mt-4 uppercase lg:text-center">
            Posted on {""}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto">
          <div className="lg:flex-row px-4 lg:mt-[120px] lg:items-center">
            <p
              className="font-opensauce leading-[1em] tracking-[-0.05em] lg:pr-[80px] xl:pr-[136px] mt-[32px] lg:mt-0"
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
