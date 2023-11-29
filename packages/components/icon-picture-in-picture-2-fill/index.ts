import type { App } from 'vue';
import _IconPictureInPicture2Fill from './icon-picture-in-picture-2-fill.vue';

const IconPictureInPicture2Fill = Object.assign(_IconPictureInPicture2Fill, {
  install: (app: App) => {
    app.component(_IconPictureInPicture2Fill.name, _IconPictureInPicture2Fill);
  }
});

export default IconPictureInPicture2Fill;