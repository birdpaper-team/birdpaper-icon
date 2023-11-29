import type { App } from 'vue';
import _IconLeftOne from './icon-left-one.vue';

const IconLeftOne = Object.assign(_IconLeftOne, {
  install: (app: App) => {
    app.component(_IconLeftOne.name, _IconLeftOne);
  }
});

export default IconLeftOne;