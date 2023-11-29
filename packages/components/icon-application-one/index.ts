import type { App } from 'vue';
import _IconApplicationOne from './icon-application-one.vue';

const IconApplicationOne = Object.assign(_IconApplicationOne, {
  install: (app: App) => {
    app.component(_IconApplicationOne.name, _IconApplicationOne);
  }
});

export default IconApplicationOne;