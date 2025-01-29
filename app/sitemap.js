export default function sitemap() {
  return [
    {
      url: "https://www.meadhikari.com/",
      priority: 1.0, // Highest priority for the Home Page
    },
    {
      url: "https://www.meadhikari.com/previous-year-paper",
      priority: 0.9, // High priority for the Paper Landing Page
    },
    {
      url: "https://www.meadhikari.com/pricing",
      priority: 0.9, // High priority for the Pricing Page
    },
    {
      url: "https://www.meadhikari.com/about",
      priority: 0.8,
    },
    {
      url: "https://www.meadhikari.com/contact",
      priority: 0.8,
    },
    {
      url: "https://www.meadhikari.com/blogs",
      priority: 0.7,
    },
    {
      url: "https://www.meadhikari.com/privacy-policy",
      priority: 0.6,
    },
    {
      url: "https://www.meadhikari.com/delete-account",
      priority: 0.6,
    },
  ];
}
