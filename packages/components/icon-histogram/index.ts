import type { App } from 'vue';
import _IconHistogram from './icon-histogram.vue';

const IconHistogram = Object.assign(_IconHistogram, {
  install: (app: App) => {
    app.component(_IconHistogram.name, _IconHistogram);
  }
});

export default IconHistogram;