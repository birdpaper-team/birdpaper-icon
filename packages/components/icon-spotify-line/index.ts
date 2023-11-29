import type { App } from 'vue';
import _IconSpotifyLine from './icon-spotify-line.vue';

const IconSpotifyLine = Object.assign(_IconSpotifyLine, {
  install: (app: App) => {
    app.component(_IconSpotifyLine.name, _IconSpotifyLine);
  }
});

export default IconSpotifyLine;