import type { App } from 'vue';
import _IconMusicCd from './icon-music-cd.vue';

const IconMusicCd = Object.assign(_IconMusicCd, {
  install: (app: App) => {
    app.component(_IconMusicCd.name, _IconMusicCd);
  }
});

export default IconMusicCd;