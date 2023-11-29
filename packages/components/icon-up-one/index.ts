import type { App } from 'vue';
import _IconUpOne from './icon-up-one.vue';

const IconUpOne = Object.assign(_IconUpOne, {
  install: (app: App) => {
    app.component(_IconUpOne.name, _IconUpOne);
  }
});

export default IconUpOne;