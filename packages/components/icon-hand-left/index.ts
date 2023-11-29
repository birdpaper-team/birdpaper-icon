import type { App } from 'vue';
import _IconHandLeft from './icon-hand-left.vue';

const IconHandLeft = Object.assign(_IconHandLeft, {
  install: (app: App) => {
    app.component(_IconHandLeft.name, _IconHandLeft);
  }
});

export default IconHandLeft;