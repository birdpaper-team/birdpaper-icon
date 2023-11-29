import type { App } from 'vue';
import _IconCalculatorFill from './icon-calculator-fill.vue';

const IconCalculatorFill = Object.assign(_IconCalculatorFill, {
  install: (app: App) => {
    app.component(_IconCalculatorFill.name, _IconCalculatorFill);
  }
});

export default IconCalculatorFill;