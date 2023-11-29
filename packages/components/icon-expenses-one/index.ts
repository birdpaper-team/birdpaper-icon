import type { App } from 'vue';
import _IconExpensesOne from './icon-expenses-one.vue';

const IconExpensesOne = Object.assign(_IconExpensesOne, {
  install: (app: App) => {
    app.component(_IconExpensesOne.name, _IconExpensesOne);
  }
});

export default IconExpensesOne;