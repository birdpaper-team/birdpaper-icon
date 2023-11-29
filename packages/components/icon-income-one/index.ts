import type { App } from 'vue';
import _IconIncomeOne from './icon-income-one.vue';

const IconIncomeOne = Object.assign(_IconIncomeOne, {
  install: (app: App) => {
    app.component(_IconIncomeOne.name, _IconIncomeOne);
  }
});

export default IconIncomeOne;