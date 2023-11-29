import type { App } from 'vue';
import _IconYoutubeFill from './icon-youtube-fill.vue';

const IconYoutubeFill = Object.assign(_IconYoutubeFill, {
  install: (app: App) => {
    app.component(_IconYoutubeFill.name, _IconYoutubeFill);
  }
});

export default IconYoutubeFill;