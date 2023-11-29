import type { App } from 'vue';
import _IconFolderMusicLine from './icon-folder-music-line.vue';

const IconFolderMusicLine = Object.assign(_IconFolderMusicLine, {
  install: (app: App) => {
    app.component(_IconFolderMusicLine.name, _IconFolderMusicLine);
  }
});

export default IconFolderMusicLine;