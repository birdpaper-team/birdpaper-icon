import type { App } from 'vue';
import _IconArithmetic from './icon-arithmetic.vue';

const IconArithmetic = Object.assign(_IconArithmetic, {
  install: (app: App) => {
    app.component(_IconArithmetic.name, _IconArithmetic);
  }
});

export default IconArithmetic;