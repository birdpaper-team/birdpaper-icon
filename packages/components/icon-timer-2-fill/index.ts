import type { App } from 'vue';
import _IconTimer2Fill from './icon-timer-2-fill.vue';

const IconTimer2Fill = Object.assign(_IconTimer2Fill, {
  install: (app: App) => {
    app.component(_IconTimer2Fill.name, _IconTimer2Fill);
  }
});

export default IconTimer2Fill;