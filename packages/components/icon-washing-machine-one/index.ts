import type { App } from 'vue';
import _IconWashingMachineOne from './icon-washing-machine-one.vue';

const IconWashingMachineOne = Object.assign(_IconWashingMachineOne, {
  install: (app: App) => {
    app.component(_IconWashingMachineOne.name, _IconWashingMachineOne);
  }
});

export default IconWashingMachineOne;