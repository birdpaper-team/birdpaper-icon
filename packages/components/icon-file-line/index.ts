import type { App } from 'vue';
import _IconFileLine from './icon-file-line.vue';

const IconFileLine = Object.assign(_IconFileLine, {
  install: (app: App) => {
    app.component(_IconFileLine.name, _IconFileLine);
  }
});

export default IconFileLine;