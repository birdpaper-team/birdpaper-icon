import type { App } from 'vue';
import _IconAvocadoOne from './icon-avocado-one.vue';

const IconAvocadoOne = Object.assign(_IconAvocadoOne, {
  install: (app: App) => {
    app.component(_IconAvocadoOne.name, _IconAvocadoOne);
  }
});

export default IconAvocadoOne;