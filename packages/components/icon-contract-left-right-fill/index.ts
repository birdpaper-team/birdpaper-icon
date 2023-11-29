import type { App } from 'vue';
import _IconContractLeftRightFill from './icon-contract-left-right-fill.vue';

const IconContractLeftRightFill = Object.assign(_IconContractLeftRightFill, {
  install: (app: App) => {
    app.component(_IconContractLeftRightFill.name, _IconContractLeftRightFill);
  }
});

export default IconContractLeftRightFill;