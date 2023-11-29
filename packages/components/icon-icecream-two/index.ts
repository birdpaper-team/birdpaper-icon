import type { App } from 'vue';
import _IconIcecreamTwo from './icon-icecream-two.vue';

const IconIcecreamTwo = Object.assign(_IconIcecreamTwo, {
  install: (app: App) => {
    app.component(_IconIcecreamTwo.name, _IconIcecreamTwo);
  }
});

export default IconIcecreamTwo;