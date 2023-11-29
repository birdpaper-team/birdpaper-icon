import type { App } from 'vue';
import _IconElectrocardiogram from './icon-electrocardiogram.vue';

const IconElectrocardiogram = Object.assign(_IconElectrocardiogram, {
  install: (app: App) => {
    app.component(_IconElectrocardiogram.name, _IconElectrocardiogram);
  }
});

export default IconElectrocardiogram;