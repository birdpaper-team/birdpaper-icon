import type { App } from 'vue';
import _IconCycleMovement from './icon-cycle-movement.vue';

const IconCycleMovement = Object.assign(_IconCycleMovement, {
  install: (app: App) => {
    app.component(_IconCycleMovement.name, _IconCycleMovement);
  }
});

export default IconCycleMovement;