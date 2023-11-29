import type { App } from 'vue';
import _IconOne from './icon-one.vue';

const IconOne = Object.assign(_IconOne, {
  install: (app: App) => {
    app.component(_IconOne.name, _IconOne);
  }
});

export default IconOne;