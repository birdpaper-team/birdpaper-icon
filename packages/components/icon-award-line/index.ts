import type { App } from 'vue';
import _IconAwardLine from './icon-award-line.vue';

const IconAwardLine = Object.assign(_IconAwardLine, {
  install: (app: App) => {
    app.component(_IconAwardLine.name, _IconAwardLine);
  }
});

export default IconAwardLine;