import type { App } from 'vue';
import _IconCalculatorLine from './icon-calculator-line.vue';

const IconCalculatorLine = Object.assign(_IconCalculatorLine, {
  install: (app: App) => {
    app.component(_IconCalculatorLine.name, _IconCalculatorLine);
  }
});

export default IconCalculatorLine;