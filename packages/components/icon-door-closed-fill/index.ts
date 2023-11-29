import type { App } from 'vue';
import _IconDoorClosedFill from './icon-door-closed-fill.vue';

const IconDoorClosedFill = Object.assign(_IconDoorClosedFill, {
  install: (app: App) => {
    app.component(_IconDoorClosedFill.name, _IconDoorClosedFill);
  }
});

export default IconDoorClosedFill;