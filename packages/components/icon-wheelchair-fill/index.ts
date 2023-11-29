import type { App } from 'vue';
import _IconWheelchairFill from './icon-wheelchair-fill.vue';

const IconWheelchairFill = Object.assign(_IconWheelchairFill, {
  install: (app: App) => {
    app.component(_IconWheelchairFill.name, _IconWheelchairFill);
  }
});

export default IconWheelchairFill;