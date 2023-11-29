import type { App } from 'vue';
import _IconInstagramLine from './icon-instagram-line.vue';

const IconInstagramLine = Object.assign(_IconInstagramLine, {
  install: (app: App) => {
    app.component(_IconInstagramLine.name, _IconInstagramLine);
  }
});

export default IconInstagramLine;