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
      url: `${BASE_URL}/exams/krushi-sevak-bharti`,
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
