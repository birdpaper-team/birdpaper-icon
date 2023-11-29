import type { App } from 'vue';
import _IconClockwise2Fill from './icon-clockwise-2-fill.vue';

const IconClockwise2Fill = Object.assign(_IconClockwise2Fill, {
  install: (app: App) => {
    app.component(_IconClockwise2Fill.name, _IconClockwise2Fill);
  }
});

export default IconClockwise2Fill;