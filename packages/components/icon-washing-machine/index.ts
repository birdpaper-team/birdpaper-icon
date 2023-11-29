import type { App } from 'vue';
import _IconWashingMachine from './icon-washing-machine.vue';

const IconWashingMachine = Object.assign(_IconWashingMachine, {
  install: (app: App) => {
    app.component(_IconWashingMachine.name, _IconWashingMachine);
  }
});

export default IconWashingMachine;