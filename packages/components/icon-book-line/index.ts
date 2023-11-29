import type { App } from 'vue';
import _IconBookLine from './icon-book-line.vue';

const IconBookLine = Object.assign(_IconBookLine, {
  install: (app: App) => {
    app.component(_IconBookLine.name, _IconBookLine);
  }
});

export default IconBookLine;