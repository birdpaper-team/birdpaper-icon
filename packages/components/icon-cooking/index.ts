import type { App } from 'vue';
import _IconCooking from './icon-cooking.vue';

const IconCooking = Object.assign(_IconCooking, {
  install: (app: App) => {
    app.component(_IconCooking.name, _IconCooking);
  }
});

export default IconCooking;