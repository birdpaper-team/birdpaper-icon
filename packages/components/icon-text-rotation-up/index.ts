import type { App } from 'vue';
import _IconTextRotationUp from './icon-text-rotation-up.vue';

const IconTextRotationUp = Object.assign(_IconTextRotationUp, {
  install: (app: App) => {
    app.component(_IconTextRotationUp.name, _IconTextRotationUp);
  }
});

export default IconTextRotationUp;