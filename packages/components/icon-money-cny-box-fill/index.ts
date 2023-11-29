import type { App } from 'vue';
import _IconMoneyCnyBoxFill from './icon-money-cny-box-fill.vue';

const IconMoneyCnyBoxFill = Object.assign(_IconMoneyCnyBoxFill, {
  install: (app: App) => {
    app.component(_IconMoneyCnyBoxFill.name, _IconMoneyCnyBoxFill);
  }
});

export default IconMoneyCnyBoxFill;