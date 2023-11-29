import type { App } from 'vue';
import _IconGamepadFill from './icon-gamepad-fill.vue';

const IconGamepadFill = Object.assign(_IconGamepadFill, {
  install: (app: App) => {
    app.component(_IconGamepadFill.name, _IconGamepadFill);
  }
});

export default IconGamepadFill;