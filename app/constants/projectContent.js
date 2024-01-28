import {
  live2kThumb,
  forwardThumb,
  pizzaComingSoonThumb,
  phillySteakThumb,
  live2kCollection,
  forwardCollection,
  phillyCheeseSteakCollection,
} from "../assets/index";

export const projectContent = [
  {
    id: 1,
    name: "Forward | Meet and Connect with Local Mentors",
    slug: "forward",
    tags: ["UIUX", "Web Development"],
    blurb:
      "Discover meaningful mentorship connections in your local community with Forward, a web application dedicated to fostering knowledge-sharing and skill development.",
    description:
      "Forward is a web platform designed to seamlessly connect individuals seeking guidance with local mentors. Whether you're delving into UI/UX or navigating the world of web development, Forward facilitates meaningful mentorship connections, allowing knowledge and skills to flourish.",
    projectUrl: "https://forward.marlowecheng.com/public/",
    imageContent: [
      { src: forwardThumb, alt: "Forward Thumbnail" },
      { src: forwardCollection, alt: "Forward Collection" },
    ],
  },
  {
    id: 2,
    name: "Pizza Coming Soon",
    slug: "pizza-coming-soon",
    tags: ["Graphic Design", "Branding"],
    blurb:
      "A revitalization of Pizza Coming Soon's menu, featuring a fresh new look and feel.",
    description:
      "This project focuses on revitalizing the menu, offering a comprehensive and fresh visual update that perfectly complements the delectable flavors of Pizza Coming Soon. Immerse yourself in a culinary journey where each design element reflects the restaurant's commitment to excellence, creating a visually appealing and inviting dining experience.",
    projectUrl: "",
    imageContent: [
      { src: pizzaComingSoonThumb, alt: "Pizza Coming Soon Thumbnail" },
    ],
  },
  {
    id: 3,
    name: "Charley's Philly Cheese Steak",
    slug: "charleys-philly-cheese-steak",
    tags: ["Graphic Design", "Branding"],
    blurb:
      "The delicious transformation of Charley's Philly Cheesesteaks menu.",
    description:
      "This graphic design project is not just about a menu makeover; it's a lively blend of casual and fun elements infused into every design choice. Experience the perfect marriage of laid-back vibes and culinary excellence, making each dish a visual and flavorful delight.",
    projectUrl: "",
    imageContent: [
      { src: phillySteakThumb, alt: "Philly Cheese Steak Thumbnail" },
      {
        src: phillyCheeseSteakCollection,
        alt: "Philly Cheese Steak Collection",
      },
    ],
  },
  {
    id: 4,
    name: "Live 2K | Music Festival Website",
    slug: "live-2k",
    tags: ["UIUX", "Web Development"],
    blurb:
      "Relive the years of the early 2000's with a modern twist to the website experience, and the retro feel of the aesthetics.",
    description:
      "Live 2K website is designed to be a one-stop shop for all things Live 2K. The website features ticket purchasing, artist lineup, and more.",
    projectUrl: "https://live2k.rikkisoriano.com/",
    imageContent: [
      { src: live2kThumb, alt: "Live 2K Thumbnail" },
      { src: live2kCollection, alt: "Live 2K Collection" },
    ],
  },
];
