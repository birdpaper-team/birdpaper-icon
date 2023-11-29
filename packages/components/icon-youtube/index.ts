import type { App } from 'vue';
import _IconYoutube from './icon-youtube.vue';

const IconYoutube = Object.assign(_IconYoutube, {
  install: (app: App) => {
    app.component(_IconYoutube.name, _IconYoutube);
  }
});

export default IconYoutube;