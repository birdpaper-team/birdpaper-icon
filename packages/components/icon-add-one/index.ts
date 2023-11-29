import type { App } from 'vue';
import _IconAddOne from './icon-add-one.vue';

const IconAddOne = Object.assign(_IconAddOne, {
  install: (app: App) => {
    app.component(_IconAddOne.name, _IconAddOne);
  }
});

export default IconAddOne;