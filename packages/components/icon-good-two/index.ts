import type { App } from 'vue';
import _IconGoodTwo from './icon-good-two.vue';

const IconGoodTwo = Object.assign(_IconGoodTwo, {
  install: (app: App) => {
    app.component(_IconGoodTwo.name, _IconGoodTwo);
  }
});

export default IconGoodTwo;