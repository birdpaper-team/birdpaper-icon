import type { App } from 'vue';
import _IconLineLine from './icon-line-line.vue';

const IconLineLine = Object.assign(_IconLineLine, {
  install: (app: App) => {
    app.component(_IconLineLine.name, _IconLineLine);
  }
});

export default IconLineLine;