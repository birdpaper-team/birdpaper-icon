import type { App } from 'vue';
import _IconOpenArmFill from './icon-open-arm-fill.vue';

const IconOpenArmFill = Object.assign(_IconOpenArmFill, {
  install: (app: App) => {
    app.component(_IconOpenArmFill.name, _IconOpenArmFill);
  }
});

export default IconOpenArmFill;