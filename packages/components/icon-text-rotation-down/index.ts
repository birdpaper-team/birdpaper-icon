import type { App } from 'vue';
import _IconTextRotationDown from './icon-text-rotation-down.vue';

const IconTextRotationDown = Object.assign(_IconTextRotationDown, {
  install: (app: App) => {
    app.component(_IconTextRotationDown.name, _IconTextRotationDown);
  }
});

export default IconTextRotationDown;