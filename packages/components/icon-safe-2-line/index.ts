import type { App } from 'vue';
import _IconSafe2Line from './icon-safe-2-line.vue';

const IconSafe2Line = Object.assign(_IconSafe2Line, {
  install: (app: App) => {
    app.component(_IconSafe2Line.name, _IconSafe2Line);
  }
});

export default IconSafe2Line;