import type { App } from 'vue';
import _IconPlayList2Line from './icon-play-list-2-line.vue';

const IconPlayList2Line = Object.assign(_IconPlayList2Line, {
  install: (app: App) => {
    app.component(_IconPlayList2Line.name, _IconPlayList2Line);
  }
});

export default IconPlayList2Line;