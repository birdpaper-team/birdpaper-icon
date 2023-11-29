import type { App } from 'vue';
import _IconArithmeticOne from './icon-arithmetic-one.vue';

const IconArithmeticOne = Object.assign(_IconArithmeticOne, {
  install: (app: App) => {
    app.component(_IconArithmeticOne.name, _IconArithmeticOne);
  }
});

export default IconArithmeticOne;