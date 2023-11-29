import type { App } from 'vue';
import _IconEqualizer2Fill from './icon-equalizer-2-fill.vue';

const IconEqualizer2Fill = Object.assign(_IconEqualizer2Fill, {
  install: (app: App) => {
    app.component(_IconEqualizer2Fill.name, _IconEqualizer2Fill);
  }
});

export default IconEqualizer2Fill;