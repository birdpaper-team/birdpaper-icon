import type { App } from 'vue';
import _IconContractRightFill from './icon-contract-right-fill.vue';

const IconContractRightFill = Object.assign(_IconContractRightFill, {
  install: (app: App) => {
    app.component(_IconContractRightFill.name, _IconContractRightFill);
  }
});

export default IconContractRightFill;