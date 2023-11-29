import type { App } from 'vue';
import _IconFocus3Line from './icon-focus-3-line.vue';

const IconFocus3Line = Object.assign(_IconFocus3Line, {
  install: (app: App) => {
    app.component(_IconFocus3Line.name, _IconFocus3Line);
  }
});

export default IconFocus3Line;