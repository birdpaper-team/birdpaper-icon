import type { App } from 'vue';
import _IconBookOne from './icon-book-one.vue';

const IconBookOne = Object.assign(_IconBookOne, {
  install: (app: App) => {
    app.component(_IconBookOne.name, _IconBookOne);
  }
});

export default IconBookOne;