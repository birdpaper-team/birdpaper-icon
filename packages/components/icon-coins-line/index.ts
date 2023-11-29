import type { App } from 'vue';
import _IconCoinsLine from './icon-coins-line.vue';

const IconCoinsLine = Object.assign(_IconCoinsLine, {
  install: (app: App) => {
    app.component(_IconCoinsLine.name, _IconCoinsLine);
  }
});

export default IconCoinsLine;