import type { App } from 'vue';
import _IconCarWashingFill from './icon-car-washing-fill.vue';

const IconCarWashingFill = Object.assign(_IconCarWashingFill, {
  install: (app: App) => {
    app.component(_IconCarWashingFill.name, _IconCarWashingFill);
  }
});

export default IconCarWashingFill;