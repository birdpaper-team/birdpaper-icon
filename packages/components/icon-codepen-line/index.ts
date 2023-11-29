import type { App } from 'vue';
import _IconCodepenLine from './icon-codepen-line.vue';

const IconCodepenLine = Object.assign(_IconCodepenLine, {
  install: (app: App) => {
    app.component(_IconCodepenLine.name, _IconCodepenLine);
  }
});

export default IconCodepenLine;