import type { App } from 'vue';
import _IconFolderMusic from './icon-folder-music.vue';

const IconFolderMusic = Object.assign(_IconFolderMusic, {
  install: (app: App) => {
    app.component(_IconFolderMusic.name, _IconFolderMusic);
  }
});

export default IconFolderMusic;