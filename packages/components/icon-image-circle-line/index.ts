import type { App } from 'vue';
import _IconImageCircleLine from './icon-image-circle-line.vue';

const IconImageCircleLine = Object.assign(_IconImageCircleLine, {
  install: (app: App) => {
    app.component(_IconImageCircleLine.name, _IconImageCircleLine);
  }
});

export default IconImageCircleLine;