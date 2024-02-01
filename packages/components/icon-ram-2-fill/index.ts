import type { App } from 'vue';
import _IconRam2Fill from './icon-ram-2-fill.vue';

const IconRam2Fill = Object.assign(_IconRam2Fill, {
  install: (app: App) => {
    app.component(_IconRam2Fill.name, _IconRam2Fill);
  }
});

export default IconRam2Fill;