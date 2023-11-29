import type { App } from 'vue';
import _IconBabyOne from './icon-baby-one.vue';

const IconBabyOne = Object.assign(_IconBabyOne, {
  install: (app: App) => {
    app.component(_IconBabyOne.name, _IconBabyOne);
  }
});

export default IconBabyOne;