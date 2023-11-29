import type { App } from 'vue';
import _IconSquareLine from './icon-square-line.vue';

const IconSquareLine = Object.assign(_IconSquareLine, {
  install: (app: App) => {
    app.component(_IconSquareLine.name, _IconSquareLine);
  }
});

export default IconSquareLine;