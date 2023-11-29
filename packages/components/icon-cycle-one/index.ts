import type { App } from 'vue';
import _IconCycleOne from './icon-cycle-one.vue';

const IconCycleOne = Object.assign(_IconCycleOne, {
  install: (app: App) => {
    app.component(_IconCycleOne.name, _IconCycleOne);
  }
});

export default IconCycleOne;