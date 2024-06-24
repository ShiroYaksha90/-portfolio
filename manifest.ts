import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Basim's Portfolio",
    short_name: "Portfolio",
    description: "A personal website to showcase my work and projects.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-144.png",
        sizes: "144x144",
        type: "image/png",
      },
    ],
  };
}
