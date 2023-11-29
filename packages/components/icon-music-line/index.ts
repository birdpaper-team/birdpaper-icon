import type { App } from 'vue';
import _IconMusicLine from './icon-music-line.vue';

const IconMusicLine = Object.assign(_IconMusicLine, {
  install: (app: App) => {
    app.component(_IconMusicLine.name, _IconMusicLine);
  }
});

export default IconMusicLine;