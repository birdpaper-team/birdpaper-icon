import type { App } from 'vue';
import _IconPictureInPictureLine from './icon-picture-in-picture-line.vue';

const IconPictureInPictureLine = Object.assign(_IconPictureInPictureLine, {
  install: (app: App) => {
    app.component(_IconPictureInPictureLine.name, _IconPictureInPictureLine);
  }
});

export default IconPictureInPictureLine;