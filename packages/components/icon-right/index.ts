import type { App } from 'vue';
import _IconRight from './icon-right.vue';

const IconRight = Object.assign(_IconRight, {
  install: (app: App) => {
    app.component(_IconRight.name, _IconRight);
  }
});

export default IconRight;