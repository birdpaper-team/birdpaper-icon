import type { App } from 'vue';
import _IconLayoutBottomLine from './icon-layout-bottom-line.vue';

const IconLayoutBottomLine = Object.assign(_IconLayoutBottomLine, {
  install: (app: App) => {
    app.component(_IconLayoutBottomLine.name, _IconLayoutBottomLine);
  }
});

export default IconLayoutBottomLine;