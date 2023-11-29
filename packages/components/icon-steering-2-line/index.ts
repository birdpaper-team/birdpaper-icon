import type { App } from 'vue';
import _IconSteering2Line from './icon-steering-2-line.vue';

const IconSteering2Line = Object.assign(_IconSteering2Line, {
  install: (app: App) => {
    app.component(_IconSteering2Line.name, _IconSteering2Line);
  }
});

export default IconSteering2Line;