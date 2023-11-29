import type { App } from 'vue';
import _IconMouseOne from './icon-mouse-one.vue';

const IconMouseOne = Object.assign(_IconMouseOne, {
  install: (app: App) => {
    app.component(_IconMouseOne.name, _IconMouseOne);
  }
});

export default IconMouseOne;