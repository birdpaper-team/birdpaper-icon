import type { App } from 'vue';
import _IconMoneyCnyCircleLine from './icon-money-cny-circle-line.vue';

const IconMoneyCnyCircleLine = Object.assign(_IconMoneyCnyCircleLine, {
  install: (app: App) => {
    app.component(_IconMoneyCnyCircleLine.name, _IconMoneyCnyCircleLine);
  }
});

export default IconMoneyCnyCircleLine;