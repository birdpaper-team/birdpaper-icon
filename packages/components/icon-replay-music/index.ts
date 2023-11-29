import type { App } from 'vue';
import _IconReplayMusic from './icon-replay-music.vue';

const IconReplayMusic = Object.assign(_IconReplayMusic, {
  install: (app: App) => {
    app.component(_IconReplayMusic.name, _IconReplayMusic);
  }
});

export default IconReplayMusic;