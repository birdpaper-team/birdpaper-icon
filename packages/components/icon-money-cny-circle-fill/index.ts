import type { App } from 'vue';
import _IconMoneyCnyCircleFill from './icon-money-cny-circle-fill.vue';

const IconMoneyCnyCircleFill = Object.assign(_IconMoneyCnyCircleFill, {
  install: (app: App) => {
    app.component(_IconMoneyCnyCircleFill.name, _IconMoneyCnyCircleFill);
  }
});

export default IconMoneyCnyCircleFill;