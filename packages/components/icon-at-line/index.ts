import type { App } from 'vue';
import _IconAtLine from './icon-at-line.vue';

const IconAtLine = Object.assign(_IconAtLine, {
  install: (app: App) => {
    app.component(_IconAtLine.name, _IconAtLine);
  }
});

export default IconAtLine;