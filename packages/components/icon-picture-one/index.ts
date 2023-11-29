import type { App } from 'vue';
import _IconPictureOne from './icon-picture-one.vue';

const IconPictureOne = Object.assign(_IconPictureOne, {
  install: (app: App) => {
    app.component(_IconPictureOne.name, _IconPictureOne);
  }
});

export default IconPictureOne;