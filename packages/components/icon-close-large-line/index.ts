import type { App } from 'vue';
import _IconCloseLargeLine from './icon-close-large-line.vue';

const IconCloseLargeLine = Object.assign(_IconCloseLargeLine, {
  install: (app: App) => {
    app.component(_IconCloseLargeLine.name, _IconCloseLargeLine);
  }
});

export default IconCloseLargeLine;