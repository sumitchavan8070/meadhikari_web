// export default function sitemap() {
//   return [
//     {
//       url: "https://www.meadhikari.com/",
//       priority: 1.0, // Highest priority for the Home Page
//     },
//     {
//       url: "https://www.meadhikari.com/previous-year-paper",
//       priority: 0.9, // High priority for the Paper Landing Page
//     },
//     {
//       url: "https://www.meadhikari.com/pricing",
//       priority: 0.9, // High priority for the Pricing Page
//     },
//     {
//       url: "https://www.meadhikari.com/about",
//       priority: 0.8,
//     },
//     {
//       url: "https://www.meadhikari.com/contact",
//       priority: 0.8,
//     },
//     {
//       url: "https://www.meadhikari.com/blogs",
//       priority: 0.7,
//     },
//     {
//       url: "https://www.meadhikari.com/privacy-policy",
//       priority: 0.6,
//     },
//     {
//       url: "https://www.meadhikari.com/delete-account",
//       priority: 0.6,
//     },
//   ];
// }
const BASE_URL = "https://www.meadhikari.com";

export default function sitemap() {
  return [
    {
      url: `${BASE_URL}/`,
      priority: 1.0, // Highest priority for the Home Page
    },
    {
      url: `${BASE_URL}/previous-year-paper`,
      priority: 0.9, // High priority for the Paper Landing Page
    },
    {
      url: `${BASE_URL}/exams/talathi-bharti`,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/exams/maharastra-police-bharti`,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/exams/mahaforest-vanrakshak-bharti`,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      priority: 0.8, // High priority for the Pricing Page
    },
    {
      url: `${BASE_URL}/about`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/delete-account`,
      priority: 0.6,
    },
  ];
}
