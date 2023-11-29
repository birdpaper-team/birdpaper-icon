import type { App } from 'vue';
import _IconLaptopOne from './icon-laptop-one.vue';

const IconLaptopOne = Object.assign(_IconLaptopOne, {
  install: (app: App) => {
    app.component(_IconLaptopOne.name, _IconLaptopOne);
  }
});

export default IconLaptopOne;