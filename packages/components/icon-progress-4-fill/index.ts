import type { App } from 'vue';
import _IconProgress4Fill from './icon-progress-4-fill.vue';

const IconProgress4Fill = Object.assign(_IconProgress4Fill, {
  install: (app: App) => {
    app.component(_IconProgress4Fill.name, _IconProgress4Fill);
  }
});

export default IconProgress4Fill;