import type { App } from 'vue';
import _IconXingLine from './icon-xing-line.vue';

const IconXingLine = Object.assign(_IconXingLine, {
  install: (app: App) => {
    app.component(_IconXingLine.name, _IconXingLine);
  }
});

export default IconXingLine;