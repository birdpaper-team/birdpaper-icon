import type { App } from 'vue';
import _IconIcecreamThree from './icon-icecream-three.vue';

const IconIcecreamThree = Object.assign(_IconIcecreamThree, {
  install: (app: App) => {
    app.component(_IconIcecreamThree.name, _IconIcecreamThree);
  }
});

export default IconIcecreamThree;