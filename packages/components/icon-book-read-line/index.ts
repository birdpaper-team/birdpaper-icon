import type { App } from 'vue';
import _IconBookReadLine from './icon-book-read-line.vue';

const IconBookReadLine = Object.assign(_IconBookReadLine, {
  install: (app: App) => {
    app.component(_IconBookReadLine.name, _IconBookReadLine);
  }
});

export default IconBookReadLine;