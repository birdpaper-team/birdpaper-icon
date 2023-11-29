import type { App } from 'vue';
import _IconMusicFill from './icon-music-fill.vue';

const IconMusicFill = Object.assign(_IconMusicFill, {
  install: (app: App) => {
    app.component(_IconMusicFill.name, _IconMusicFill);
  }
});

export default IconMusicFill;