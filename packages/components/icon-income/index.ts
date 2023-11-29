import type { App } from 'vue';
import _IconIncome from './icon-income.vue';

const IconIncome = Object.assign(_IconIncome, {
  install: (app: App) => {
    app.component(_IconIncome.name, _IconIncome);
  }
});

export default IconIncome;