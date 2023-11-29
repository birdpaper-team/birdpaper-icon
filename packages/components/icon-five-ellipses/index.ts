import type { App } from 'vue';
import _IconFiveEllipses from './icon-five-ellipses.vue';

const IconFiveEllipses = Object.assign(_IconFiveEllipses, {
  install: (app: App) => {
    app.component(_IconFiveEllipses.name, _IconFiveEllipses);
  }
});

export default IconFiveEllipses;