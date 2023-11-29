import type { App } from 'vue';
import _IconHandRight from './icon-hand-right.vue';

const IconHandRight = Object.assign(_IconHandRight, {
  install: (app: App) => {
    app.component(_IconHandRight.name, _IconHandRight);
  }
});

export default IconHandRight;