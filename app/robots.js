export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portfolio-aria.vercel.app/sitemap.xml",
    host: "https://portfolio-aria.vercel.app",
  };
}
