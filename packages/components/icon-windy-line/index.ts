import type { App } from 'vue';
import _IconWindyLine from './icon-windy-line.vue';

const IconWindyLine = Object.assign(_IconWindyLine, {
  install: (app: App) => {
    app.component(_IconWindyLine.name, _IconWindyLine);
  }
});

export default IconWindyLine;