import type { App } from 'vue';
import _IconSailboatLine from './icon-sailboat-line.vue';

const IconSailboatLine = Object.assign(_IconSailboatLine, {
  install: (app: App) => {
    app.component(_IconSailboatLine.name, _IconSailboatLine);
  }
});

export default IconSailboatLine;