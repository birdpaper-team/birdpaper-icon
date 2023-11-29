import type { App } from 'vue';
import _IconCalculator from './icon-calculator.vue';

const IconCalculator = Object.assign(_IconCalculator, {
  install: (app: App) => {
    app.component(_IconCalculator.name, _IconCalculator);
  }
});

export default IconCalculator;