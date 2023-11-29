import type { App } from 'vue';
import _IconCandy from './icon-candy.vue';

const IconCandy = Object.assign(_IconCandy, {
  install: (app: App) => {
    app.component(_IconCandy.name, _IconCandy);
  }
});

export default IconCandy;