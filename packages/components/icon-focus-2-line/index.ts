import type { App } from 'vue';
import _IconFocus2Line from './icon-focus-2-line.vue';

const IconFocus2Line = Object.assign(_IconFocus2Line, {
  install: (app: App) => {
    app.component(_IconFocus2Line.name, _IconFocus2Line);
  }
});

export default IconFocus2Line;