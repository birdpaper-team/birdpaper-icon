import type { App } from 'vue';
import _IconLayoutLeftLine from './icon-layout-left-line.vue';

const IconLayoutLeftLine = Object.assign(_IconLayoutLeftLine, {
  install: (app: App) => {
    app.component(_IconLayoutLeftLine.name, _IconLayoutLeftLine);
  }
});

export default IconLayoutLeftLine;