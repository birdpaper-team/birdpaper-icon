import type { App } from 'vue';
import _IconArithmeticButtons from './icon-arithmetic-buttons.vue';

const IconArithmeticButtons = Object.assign(_IconArithmeticButtons, {
  install: (app: App) => {
    app.component(_IconArithmeticButtons.name, _IconArithmeticButtons);
  }
});

export default IconArithmeticButtons;