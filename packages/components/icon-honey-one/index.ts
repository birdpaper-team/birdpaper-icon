import type { App } from 'vue';
import _IconHoneyOne from './icon-honey-one.vue';

const IconHoneyOne = Object.assign(_IconHoneyOne, {
  install: (app: App) => {
    app.component(_IconHoneyOne.name, _IconHoneyOne);
  }
});

export default IconHoneyOne;