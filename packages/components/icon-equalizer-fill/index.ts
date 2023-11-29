import type { App } from 'vue';
import _IconEqualizerFill from './icon-equalizer-fill.vue';

const IconEqualizerFill = Object.assign(_IconEqualizerFill, {
  install: (app: App) => {
    app.component(_IconEqualizerFill.name, _IconEqualizerFill);
  }
});

export default IconEqualizerFill;