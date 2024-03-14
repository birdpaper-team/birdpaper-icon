import type { App } from 'vue';
import _IconLayoutVerticalLine from './icon-layout-vertical-line.vue';

const IconLayoutVerticalLine = Object.assign(_IconLayoutVerticalLine, {
  install: (app: App) => {
    app.component(_IconLayoutVerticalLine.name, _IconLayoutVerticalLine);
  }
});

export default IconLayoutVerticalLine;