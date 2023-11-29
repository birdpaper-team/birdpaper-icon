import type { App } from 'vue';
import _IconEditCircleLine from './icon-edit-circle-line.vue';

const IconEditCircleLine = Object.assign(_IconEditCircleLine, {
  install: (app: App) => {
    app.component(_IconEditCircleLine.name, _IconEditCircleLine);
  }
});

export default IconEditCircleLine;