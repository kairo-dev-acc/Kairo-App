export const cityLandmarks = {
  Paris: require("../assets/landmarks/paris.jpg"),         // Eiffel Tower
  London: require("../assets/landmarks/london.jpg"),       // Big Ben
  Lagos: require("../assets/landmarks/lagos.jpg"),         // Third Mainland Bridge
  "New York": require("../assets/landmarks/newyork.jpg"),  // Statue of Liberty
  Dubai: require("../assets/landmarks/dubai.jpg"),         // Burj Khalifa

  default: require("../assets/landmarks/default.jpg"),
};

export function getLandmark(city) {
  return cityLandmarks[city] || cityLandmarks.default;
}
