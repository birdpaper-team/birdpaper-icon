import type { App } from 'vue';
import _IconSpam2Fill from './icon-spam-2-fill.vue';

const IconSpam2Fill = Object.assign(_IconSpam2Fill, {
  install: (app: App) => {
    app.component(_IconSpam2Fill.name, _IconSpam2Fill);
  }
});

export default IconSpam2Fill;