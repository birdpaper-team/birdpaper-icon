import type { App } from 'vue';
import _IconLayoutTopLine from './icon-layout-top-line.vue';

const IconLayoutTopLine = Object.assign(_IconLayoutTopLine, {
  install: (app: App) => {
    app.component(_IconLayoutTopLine.name, _IconLayoutTopLine);
  }
});

export default IconLayoutTopLine;