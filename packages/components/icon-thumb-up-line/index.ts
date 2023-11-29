import type { App } from 'vue';
import _IconThumbUpLine from './icon-thumb-up-line.vue';

const IconThumbUpLine = Object.assign(_IconThumbUpLine, {
  install: (app: App) => {
    app.component(_IconThumbUpLine.name, _IconThumbUpLine);
  }
});

export default IconThumbUpLine;