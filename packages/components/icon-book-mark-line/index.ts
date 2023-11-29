import type { App } from 'vue';
import _IconBookMarkLine from './icon-book-mark-line.vue';

const IconBookMarkLine = Object.assign(_IconBookMarkLine, {
  install: (app: App) => {
    app.component(_IconBookMarkLine.name, _IconBookMarkLine);
  }
});

export default IconBookMarkLine;