import type { App } from 'vue';
import _IconMedal2Fill from './icon-medal-2-fill.vue';

const IconMedal2Fill = Object.assign(_IconMedal2Fill, {
  install: (app: App) => {
    app.component(_IconMedal2Fill.name, _IconMedal2Fill);
  }
});

export default IconMedal2Fill;