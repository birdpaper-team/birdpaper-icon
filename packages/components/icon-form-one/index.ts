import type { App } from 'vue';
import _IconFormOne from './icon-form-one.vue';

const IconFormOne = Object.assign(_IconFormOne, {
  install: (app: App) => {
    app.component(_IconFormOne.name, _IconFormOne);
  }
});

export default IconFormOne;