import type { App } from 'vue';
import _IconEditOne from './icon-edit-one.vue';

const IconEditOne = Object.assign(_IconEditOne, {
  install: (app: App) => {
    app.component(_IconEditOne.name, _IconEditOne);
  }
});

export default IconEditOne;