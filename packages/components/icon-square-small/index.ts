import type { App } from 'vue';
import _IconSquareSmall from './icon-square-small.vue';

const IconSquareSmall = Object.assign(_IconSquareSmall, {
  install: (app: App) => {
    app.component(_IconSquareSmall.name, _IconSquareSmall);
  }
});

export default IconSquareSmall;