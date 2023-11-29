import type { App } from 'vue';
import _IconEqualizer from './icon-equalizer.vue';

const IconEqualizer = Object.assign(_IconEqualizer, {
  install: (app: App) => {
    app.component(_IconEqualizer.name, _IconEqualizer);
  }
});

export default IconEqualizer;