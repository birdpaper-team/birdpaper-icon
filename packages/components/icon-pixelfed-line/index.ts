import type { App } from 'vue';
import _IconPixelfedLine from './icon-pixelfed-line.vue';

const IconPixelfedLine = Object.assign(_IconPixelfedLine, {
  install: (app: App) => {
    app.component(_IconPixelfedLine.name, _IconPixelfedLine);
  }
});

export default IconPixelfedLine;