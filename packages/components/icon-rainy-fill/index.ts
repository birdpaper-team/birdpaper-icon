import type { App } from 'vue';
import _IconRainyFill from './icon-rainy-fill.vue';

const IconRainyFill = Object.assign(_IconRainyFill, {
  install: (app: App) => {
    app.component(_IconRainyFill.name, _IconRainyFill);
  }
});

export default IconRainyFill;