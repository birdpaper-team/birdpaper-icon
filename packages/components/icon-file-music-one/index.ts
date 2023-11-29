import type { App } from 'vue';
import _IconFileMusicOne from './icon-file-music-one.vue';

const IconFileMusicOne = Object.assign(_IconFileMusicOne, {
  install: (app: App) => {
    app.component(_IconFileMusicOne.name, _IconFileMusicOne);
  }
});

export default IconFileMusicOne;