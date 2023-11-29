import type { App } from 'vue';
import _IconMusicRhythm from './icon-music-rhythm.vue';

const IconMusicRhythm = Object.assign(_IconMusicRhythm, {
  install: (app: App) => {
    app.component(_IconMusicRhythm.name, _IconMusicRhythm);
  }
});

export default IconMusicRhythm;