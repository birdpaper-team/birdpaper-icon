import type { App } from 'vue';
import _IconDoorFill from './icon-door-fill.vue';

const IconDoorFill = Object.assign(_IconDoorFill, {
  install: (app: App) => {
    app.component(_IconDoorFill.name, _IconDoorFill);
  }
});

export default IconDoorFill;