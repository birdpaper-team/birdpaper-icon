import type { App } from 'vue';
import _IconDoorOpenFill from './icon-door-open-fill.vue';

const IconDoorOpenFill = Object.assign(_IconDoorOpenFill, {
  install: (app: App) => {
    app.component(_IconDoorOpenFill.name, _IconDoorOpenFill);
  }
});

export default IconDoorOpenFill;