import type { App } from 'vue';
import _IconElevator from './icon-elevator.vue';

const IconElevator = Object.assign(_IconElevator, {
  install: (app: App) => {
    app.component(_IconElevator.name, _IconElevator);
  }
});

export default IconElevator;