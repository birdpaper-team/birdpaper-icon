import type { App } from 'vue';
import _IconCollectPicture from './icon-collect-picture.vue';

const IconCollectPicture = Object.assign(_IconCollectPicture, {
  install: (app: App) => {
    app.component(_IconCollectPicture.name, _IconCollectPicture);
  }
});

export default IconCollectPicture;