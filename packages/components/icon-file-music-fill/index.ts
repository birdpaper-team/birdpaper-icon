import type { App } from 'vue';
import _IconFileMusicFill from './icon-file-music-fill.vue';

const IconFileMusicFill = Object.assign(_IconFileMusicFill, {
  install: (app: App) => {
    app.component(_IconFileMusicFill.name, _IconFileMusicFill);
  }
});

export default IconFileMusicFill;