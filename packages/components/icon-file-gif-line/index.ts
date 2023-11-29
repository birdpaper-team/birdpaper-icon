import type { App } from 'vue';
import _IconFileGifLine from './icon-file-gif-line.vue';

const IconFileGifLine = Object.assign(_IconFileGifLine, {
  install: (app: App) => {
    app.component(_IconFileGifLine.name, _IconFileGifLine);
  }
});

export default IconFileGifLine;