import type { App } from 'vue';
import _IconPassportOne from './icon-passport-one.vue';

const IconPassportOne = Object.assign(_IconPassportOne, {
  install: (app: App) => {
    app.component(_IconPassportOne.name, _IconPassportOne);
  }
});

export default IconPassportOne;