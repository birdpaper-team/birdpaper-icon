import type { App } from 'vue';
import _IconTextRotationNone from './icon-text-rotation-none.vue';

const IconTextRotationNone = Object.assign(_IconTextRotationNone, {
  install: (app: App) => {
    app.component(_IconTextRotationNone.name, _IconTextRotationNone);
  }
});

export default IconTextRotationNone;