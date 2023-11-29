import type { App } from 'vue';
import _IconSpotifyFill from './icon-spotify-fill.vue';

const IconSpotifyFill = Object.assign(_IconSpotifyFill, {
  install: (app: App) => {
    app.component(_IconSpotifyFill.name, _IconSpotifyFill);
  }
});

export default IconSpotifyFill;