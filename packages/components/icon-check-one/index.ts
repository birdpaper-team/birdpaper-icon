import type { App } from 'vue';
import _IconCheckOne from './icon-check-one.vue';

const IconCheckOne = Object.assign(_IconCheckOne, {
  install: (app: App) => {
    app.component(_IconCheckOne.name, _IconCheckOne);
  }
});

export default IconCheckOne;