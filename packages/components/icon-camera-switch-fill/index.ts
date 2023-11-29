import type { App } from 'vue';
import _IconCameraSwitchFill from './icon-camera-switch-fill.vue';

const IconCameraSwitchFill = Object.assign(_IconCameraSwitchFill, {
  install: (app: App) => {
    app.component(_IconCameraSwitchFill.name, _IconCameraSwitchFill);
  }
});

export default IconCameraSwitchFill;