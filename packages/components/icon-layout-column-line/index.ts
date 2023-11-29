import type { App } from 'vue';
import _IconLayoutColumnLine from './icon-layout-column-line.vue';

const IconLayoutColumnLine = Object.assign(_IconLayoutColumnLine, {
  install: (app: App) => {
    app.component(_IconLayoutColumnLine.name, _IconLayoutColumnLine);
  }
});

export default IconLayoutColumnLine;