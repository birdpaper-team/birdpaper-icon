import type { App } from 'vue';
import _IconPlayList2Fill from './icon-play-list-2-fill.vue';

const IconPlayList2Fill = Object.assign(_IconPlayList2Fill, {
  install: (app: App) => {
    app.component(_IconPlayList2Fill.name, _IconPlayList2Fill);
  }
});

export default IconPlayList2Fill;