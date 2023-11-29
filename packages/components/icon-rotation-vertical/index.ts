import type { App } from 'vue';
import _IconRotationVertical from './icon-rotation-vertical.vue';

const IconRotationVertical = Object.assign(_IconRotationVertical, {
  install: (app: App) => {
    app.component(_IconRotationVertical.name, _IconRotationVertical);
  }
});

export default IconRotationVertical;