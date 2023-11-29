import type { App } from 'vue';
import _IconFolderMusicOne from './icon-folder-music-one.vue';

const IconFolderMusicOne = Object.assign(_IconFolderMusicOne, {
  install: (app: App) => {
    app.component(_IconFolderMusicOne.name, _IconFolderMusicOne);
  }
});

export default IconFolderMusicOne;