import { genres } from "./data.js";

function getGenreTitles(podcast) {
  return podcast.genres
    .map(id => genres.find(g => g.id === id)?.title || "Unknown")
    .filter(title => title !== "Unknown");
}

export default getGenreTitles