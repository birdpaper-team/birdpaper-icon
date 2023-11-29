import type { App } from 'vue';
import _IconImageAddLine from './icon-image-add-line.vue';

const IconImageAddLine = Object.assign(_IconImageAddLine, {
  install: (app: App) => {
    app.component(_IconImageAddLine.name, _IconImageAddLine);
  }
});

export default IconImageAddLine;