import type { App } from 'vue';
import _IconTrapezoid from './icon-trapezoid.vue';

const IconTrapezoid = Object.assign(_IconTrapezoid, {
  install: (app: App) => {
    app.component(_IconTrapezoid.name, _IconTrapezoid);
  }
});

export default IconTrapezoid;