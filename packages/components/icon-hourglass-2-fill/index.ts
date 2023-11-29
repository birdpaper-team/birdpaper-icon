import type { App } from 'vue';
import _IconHourglass2Fill from './icon-hourglass-2-fill.vue';

const IconHourglass2Fill = Object.assign(_IconHourglass2Fill, {
  install: (app: App) => {
    app.component(_IconHourglass2Fill.name, _IconHourglass2Fill);
  }
});

export default IconHourglass2Fill;