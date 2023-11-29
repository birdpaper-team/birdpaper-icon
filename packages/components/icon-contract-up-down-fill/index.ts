import type { App } from 'vue';
import _IconContractUpDownFill from './icon-contract-up-down-fill.vue';

const IconContractUpDownFill = Object.assign(_IconContractUpDownFill, {
  install: (app: App) => {
    app.component(_IconContractUpDownFill.name, _IconContractUpDownFill);
  }
});

export default IconContractUpDownFill;