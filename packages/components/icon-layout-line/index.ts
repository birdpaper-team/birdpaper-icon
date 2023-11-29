import type { App } from 'vue';
import _IconLayoutLine from './icon-layout-line.vue';

const IconLayoutLine = Object.assign(_IconLayoutLine, {
  install: (app: App) => {
    app.component(_IconLayoutLine.name, _IconLayoutLine);
  }
});

export default IconLayoutLine;