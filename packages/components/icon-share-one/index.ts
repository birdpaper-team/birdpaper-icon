import type { App } from 'vue';
import _IconShareOne from './icon-share-one.vue';

const IconShareOne = Object.assign(_IconShareOne, {
  install: (app: App) => {
    app.component(_IconShareOne.name, _IconShareOne);
  }
});

export default IconShareOne;