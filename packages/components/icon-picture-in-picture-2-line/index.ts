import type { App } from 'vue';
import _IconPictureInPicture2Line from './icon-picture-in-picture-2-line.vue';

const IconPictureInPicture2Line = Object.assign(_IconPictureInPicture2Line, {
  install: (app: App) => {
    app.component(_IconPictureInPicture2Line.name, _IconPictureInPicture2Line);
  }
});

export default IconPictureInPicture2Line;