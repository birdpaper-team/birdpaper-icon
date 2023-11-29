import type { App } from 'vue';
import _IconTwoEllipses from './icon-two-ellipses.vue';

const IconTwoEllipses = Object.assign(_IconTwoEllipses, {
  install: (app: App) => {
    app.component(_IconTwoEllipses.name, _IconTwoEllipses);
  }
});

export default IconTwoEllipses;