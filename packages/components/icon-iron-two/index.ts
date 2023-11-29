import type { App } from 'vue';
import _IconIronTwo from './icon-iron-two.vue';

const IconIronTwo = Object.assign(_IconIronTwo, {
  install: (app: App) => {
    app.component(_IconIronTwo.name, _IconIronTwo);
  }
});

export default IconIronTwo;