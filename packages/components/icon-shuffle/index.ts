import type { App } from 'vue';
import _IconShuffle from './icon-shuffle.vue';

const IconShuffle = Object.assign(_IconShuffle, {
  install: (app: App) => {
    app.component(_IconShuffle.name, _IconShuffle);
  }
});

export default IconShuffle;