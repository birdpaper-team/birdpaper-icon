import type { App } from 'vue';
import _IconFireworks from './icon-fireworks.vue';

const IconFireworks = Object.assign(_IconFireworks, {
  install: (app: App) => {
    app.component(_IconFireworks.name, _IconFireworks);
  }
});

export default IconFireworks;