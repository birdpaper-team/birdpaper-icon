import type { App } from 'vue';
import _IconCloseOne from './icon-close-one.vue';

const IconCloseOne = Object.assign(_IconCloseOne, {
  install: (app: App) => {
    app.component(_IconCloseOne.name, _IconCloseOne);
  }
});

export default IconCloseOne;