import type { App } from 'vue';
import _IconVisaFill from './icon-visa-fill.vue';

const IconVisaFill = Object.assign(_IconVisaFill, {
  install: (app: App) => {
    app.component(_IconVisaFill.name, _IconVisaFill);
  }
});

export default IconVisaFill;