import type { App } from 'vue';
import _IconLuggageDepositFill from './icon-luggage-deposit-fill.vue';

const IconLuggageDepositFill = Object.assign(_IconLuggageDepositFill, {
  install: (app: App) => {
    app.component(_IconLuggageDepositFill.name, _IconLuggageDepositFill);
  }
});

export default IconLuggageDepositFill;