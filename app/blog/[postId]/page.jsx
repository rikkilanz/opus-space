import { getWpBlogPosts } from "../../helper/getWpBlogPosts";
import { getSinglePost } from "../../helper/getSinglePost";
import { getFeaturedMedia } from "@/app/helper/getFeaturedMedia";
import Image from "next/image";
import Link from "next/link";

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
        <div className="flex flex-col md:flex-row mx-auto relative lg:justify-end">
          <div className="flex flex-col lg:max-w-[720px] lg:w-[50%] lg:basis-[50%]">
            <h1 className=" text-[40px] md:text-[60px] lg:text-[100px] font-epilogue font-medium leading-[1em] tracking-[-0.05em] py-6 px-4">
              {post.title.rendered}
            </h1>
            <h2
              className="text-[16px] md:text-[20px] lg:text-[32px] leadingfont-epilogue font-medium mt-[20px] leading-[1em] tracking-[-0.05em] px-4"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered,
              }}
            />
            <p className="text-gray-600 font-opensauce leading-[1em] tracking-[-0.05em] mt-4 uppercase px-4">
              Posted on {""}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="relative lg:w-[50%] lg:basis-[50%]">
            <div className="absolute left-auto top-0 bottom-0 right-0 w-full">
              {" "}
              <Image
                src={media.source_url}
                alt={media.alt_text}
                layout="fill"
                objectFit="cover"
                className="inline-block"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto grid grid-cols-5 relative lg:mt-[120px]">
          <div className="col-span-5 md:col-span-2">
            <div className="sticky top-[200px]">
              <h2 className=" bottom-0 leading-[1em] tracking-[-0.05em] font-epilogue font-semibold lg:font-semibold lg:text-[50px] text-[40px] px-4 mt-[32px] lg:mt-0">
                Written By
              </h2>
              <div className="bottom-0 p-8 flex items-center">
                <div className="border-[3px] border-white">
                  {" "}
                  <Image src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" width={50} height={50}></Image>
                </div>
                <p className="font-opensauce leading-[1.5em] tracking-[-0.05em] text-[24px] text-gray-200  mt-[32px] lg:mt-0 ml-4">
                  Dave Koo
                </p>
              </div>
            </div>
          </div>
          <div className="lg:flex-row px-4 lg:items-center col-span-5 md:col-span-3">
            <p
              className="font-opensauce leading-[1.5em] tracking-[-0.05em] text-[18px] text-gray-200  mt-[32px] lg:mt-0 wp-content"
              dangerouslySetInnerHTML={{
                __html: post.content.rendered,
              }}
            />
            {/* <p className="font-opensauce leading-[1.5em] tracking-[-0.05em] font-[18px] text-gray-200  mt-[32px] lg:mt-0">
              {post.content.rendered}
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}
