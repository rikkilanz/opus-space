import { brandWordmarkWhite } from "@/app/assets";

export async function getFeaturedMedia(featuredMediaId) {
  if (featuredMediaId === 0) {
    return { source_url: brandWordmarkWhite, alt_text: "Opus space wordmark white"};
  } else {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${featuredMediaId}`
    );
    const media = await response.json();
    return media;
  }
}
