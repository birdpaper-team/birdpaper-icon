import type { App } from 'vue';
import _IconFileGif from './icon-file-gif.vue';

const IconFileGif = Object.assign(_IconFileGif, {
  install: (app: App) => {
    app.component(_IconFileGif.name, _IconFileGif);
  }
});

export default IconFileGif;