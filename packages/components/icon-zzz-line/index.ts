import type { App } from 'vue';
import _IconZzzLine from './icon-zzz-line.vue';

const IconZzzLine = Object.assign(_IconZzzLine, {
  install: (app: App) => {
    app.component(_IconZzzLine.name, _IconZzzLine);
  }
});

export default IconZzzLine;