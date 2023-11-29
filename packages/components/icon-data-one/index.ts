import type { App } from 'vue';
import _IconDataOne from './icon-data-one.vue';

const IconDataOne = Object.assign(_IconDataOne, {
  install: (app: App) => {
    app.component(_IconDataOne.name, _IconDataOne);
  }
});

export default IconDataOne;