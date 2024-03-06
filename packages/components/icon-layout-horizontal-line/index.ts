import type { App } from 'vue';
import _IconLayoutHorizontalLine from './icon-layout-horizontal-line.vue';

const IconLayoutHorizontalLine = Object.assign(_IconLayoutHorizontalLine, {
  install: (app: App) => {
    app.component(_IconLayoutHorizontalLine.name, _IconLayoutHorizontalLine);
  }
});

export default IconLayoutHorizontalLine;