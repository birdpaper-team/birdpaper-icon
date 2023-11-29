import type { App } from 'vue';
import _IconStackLine from './icon-stack-line.vue';

const IconStackLine = Object.assign(_IconStackLine, {
  install: (app: App) => {
    app.component(_IconStackLine.name, _IconStackLine);
  }
});

export default IconStackLine;