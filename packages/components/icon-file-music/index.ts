import type { App } from 'vue';
import _IconFileMusic from './icon-file-music.vue';

const IconFileMusic = Object.assign(_IconFileMusic, {
  install: (app: App) => {
    app.component(_IconFileMusic.name, _IconFileMusic);
  }
});

export default IconFileMusic;