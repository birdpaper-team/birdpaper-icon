import type { App } from 'vue';
import _IconDeleteOne from './icon-delete-one.vue';

const IconDeleteOne = Object.assign(_IconDeleteOne, {
  install: (app: App) => {
    app.component(_IconDeleteOne.name, _IconDeleteOne);
  }
});

export default IconDeleteOne;