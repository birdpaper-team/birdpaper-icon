import type { App } from 'vue';
import _IconMusic2Fill from './icon-music-2-fill.vue';

const IconMusic2Fill = Object.assign(_IconMusic2Fill, {
  install: (app: App) => {
    app.component(_IconMusic2Fill.name, _IconMusic2Fill);
  }
});

export default IconMusic2Fill;