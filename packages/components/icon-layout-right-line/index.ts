import type { App } from 'vue';
import _IconLayoutRightLine from './icon-layout-right-line.vue';

const IconLayoutRightLine = Object.assign(_IconLayoutRightLine, {
  install: (app: App) => {
    app.component(_IconLayoutRightLine.name, _IconLayoutRightLine);
  }
});

export default IconLayoutRightLine;