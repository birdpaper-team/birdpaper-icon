import type { App } from 'vue';
import _IconFileGifFill from './icon-file-gif-fill.vue';

const IconFileGifFill = Object.assign(_IconFileGifFill, {
  install: (app: App) => {
    app.component(_IconFileGifFill.name, _IconFileGifFill);
  }
});

export default IconFileGifFill;