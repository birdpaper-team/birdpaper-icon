import type { App } from 'vue';
import _IconLayoutRowLine from './icon-layout-row-line.vue';

const IconLayoutRowLine = Object.assign(_IconLayoutRowLine, {
  install: (app: App) => {
    app.component(_IconLayoutRowLine.name, _IconLayoutRowLine);
  }
});

export default IconLayoutRowLine;