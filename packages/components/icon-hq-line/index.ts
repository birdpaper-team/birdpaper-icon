import type { App } from 'vue';
import _IconHqLine from './icon-hq-line.vue';

const IconHqLine = Object.assign(_IconHqLine, {
  install: (app: App) => {
    app.component(_IconHqLine.name, _IconHqLine);
  }
});

export default IconHqLine;