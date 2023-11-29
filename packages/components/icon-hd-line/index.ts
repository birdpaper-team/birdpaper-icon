import type { App } from 'vue';
import _IconHdLine from './icon-hd-line.vue';

const IconHdLine = Object.assign(_IconHdLine, {
  install: (app: App) => {
    app.component(_IconHdLine.name, _IconHdLine);
  }
});

export default IconHdLine;