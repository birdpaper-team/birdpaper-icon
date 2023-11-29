import type { App } from 'vue';
import _IconMusicOne from './icon-music-one.vue';

const IconMusicOne = Object.assign(_IconMusicOne, {
  install: (app: App) => {
    app.component(_IconMusicOne.name, _IconMusicOne);
  }
});

export default IconMusicOne;