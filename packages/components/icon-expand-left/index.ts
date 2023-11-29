import type { App } from 'vue';
import _IconExpandLeft from './icon-expand-left.vue';

const IconExpandLeft = Object.assign(_IconExpandLeft, {
  install: (app: App) => {
    app.component(_IconExpandLeft.name, _IconExpandLeft);
  }
});

export default IconExpandLeft;