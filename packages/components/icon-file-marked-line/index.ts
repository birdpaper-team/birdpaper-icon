import type { App } from 'vue';
import _IconFileMarkedLine from './icon-file-marked-line.vue';

const IconFileMarkedLine = Object.assign(_IconFileMarkedLine, {
  install: (app: App) => {
    app.component(_IconFileMarkedLine.name, _IconFileMarkedLine);
  }
});

export default IconFileMarkedLine;