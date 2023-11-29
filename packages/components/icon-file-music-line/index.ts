import type { App } from 'vue';
import _IconFileMusicLine from './icon-file-music-line.vue';

const IconFileMusicLine = Object.assign(_IconFileMusicLine, {
  install: (app: App) => {
    app.component(_IconFileMusicLine.name, _IconFileMusicLine);
  }
});

export default IconFileMusicLine;