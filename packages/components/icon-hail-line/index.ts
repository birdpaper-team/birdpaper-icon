import type { App } from 'vue';
import _IconHailLine from './icon-hail-line.vue';

const IconHailLine = Object.assign(_IconHailLine, {
  install: (app: App) => {
    app.component(_IconHailLine.name, _IconHailLine);
  }
});

export default IconHailLine;