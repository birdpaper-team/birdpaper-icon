import type { App } from 'vue';
import _IconGamepadLine from './icon-gamepad-line.vue';

const IconGamepadLine = Object.assign(_IconGamepadLine, {
  install: (app: App) => {
    app.component(_IconGamepadLine.name, _IconGamepadLine);
  }
});

export default IconGamepadLine;