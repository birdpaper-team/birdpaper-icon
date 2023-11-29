import type { App } from 'vue';
import _IconTwitterLine from './icon-twitter-line.vue';

const IconTwitterLine = Object.assign(_IconTwitterLine, {
  install: (app: App) => {
    app.component(_IconTwitterLine.name, _IconTwitterLine);
  }
});

export default IconTwitterLine;