import type { App } from 'vue';
import _IconJoystick from './icon-joystick.vue';

const IconJoystick = Object.assign(_IconJoystick, {
  install: (app: App) => {
    app.component(_IconJoystick.name, _IconJoystick);
  }
});

export default IconJoystick;