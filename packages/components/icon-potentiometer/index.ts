import type { App } from 'vue';
import _IconPotentiometer from './icon-potentiometer.vue';

const IconPotentiometer = Object.assign(_IconPotentiometer, {
  install: (app: App) => {
    app.component(_IconPotentiometer.name, _IconPotentiometer);
  }
});

export default IconPotentiometer;