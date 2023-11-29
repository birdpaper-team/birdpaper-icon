import type { App } from 'vue';
import _IconTwoDimensionalCode from './icon-two-dimensional-code.vue';

const IconTwoDimensionalCode = Object.assign(_IconTwoDimensionalCode, {
  install: (app: App) => {
    app.component(_IconTwoDimensionalCode.name, _IconTwoDimensionalCode);
  }
});

export default IconTwoDimensionalCode;