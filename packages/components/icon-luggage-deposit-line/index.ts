import type { App } from 'vue';
import _IconLuggageDepositLine from './icon-luggage-deposit-line.vue';

const IconLuggageDepositLine = Object.assign(_IconLuggageDepositLine, {
  install: (app: App) => {
    app.component(_IconLuggageDepositLine.name, _IconLuggageDepositLine);
  }
});

export default IconLuggageDepositLine;