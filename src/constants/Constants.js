
export const episode = {
  title: String,
  description: String,
  episode: Number,
  file: String,
};

export const season = {
  season: Number,
  title: String,
  image: String,
  episodes: [episode],
};

export const favouritesEpisodes={episode:episode, podcastTitle:String,seasonTitle:String}
export const BUTTON_COLOR="#a8531d"
export const PODCAST_BG_IMAGE_COLOR=" #b8945c"
export const favouritesEpisodesKey="favouritesEpisodes"