import type { App } from 'vue';
import _IconMusic from './icon-music.vue';

const IconMusic = Object.assign(_IconMusic, {
  install: (app: App) => {
    app.component(_IconMusic.name, _IconMusic);
  }
});

export default IconMusic;