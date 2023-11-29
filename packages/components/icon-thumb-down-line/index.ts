import type { App } from 'vue';
import _IconThumbDownLine from './icon-thumb-down-line.vue';

const IconThumbDownLine = Object.assign(_IconThumbDownLine, {
  install: (app: App) => {
    app.component(_IconThumbDownLine.name, _IconThumbDownLine);
  }
});

export default IconThumbDownLine;