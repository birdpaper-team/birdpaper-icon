import type { App } from 'vue';
import _IconIronThree from './icon-iron-three.vue';

const IconIronThree = Object.assign(_IconIronThree, {
  install: (app: App) => {
    app.component(_IconIronThree.name, _IconIronThree);
  }
});

export default IconIronThree;