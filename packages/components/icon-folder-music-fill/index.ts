import type { App } from 'vue';
import _IconFolderMusicFill from './icon-folder-music-fill.vue';

const IconFolderMusicFill = Object.assign(_IconFolderMusicFill, {
  install: (app: App) => {
    app.component(_IconFolderMusicFill.name, _IconFolderMusicFill);
  }
});

export default IconFolderMusicFill;