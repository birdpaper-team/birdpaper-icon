import type { App } from 'vue';
import _IconPicOne from './icon-pic-one.vue';

const IconPicOne = Object.assign(_IconPicOne, {
  install: (app: App) => {
    app.component(_IconPicOne.name, _IconPicOne);
  }
});

export default IconPicOne;