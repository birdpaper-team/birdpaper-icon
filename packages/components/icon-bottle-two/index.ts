import type { App } from 'vue';
import _IconBottleTwo from './icon-bottle-two.vue';

const IconBottleTwo = Object.assign(_IconBottleTwo, {
  install: (app: App) => {
    app.component(_IconBottleTwo.name, _IconBottleTwo);
  }
});

export default IconBottleTwo;