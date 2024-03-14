import type { App } from 'vue';
import _IconContractFill from './icon-contract-fill.vue';

const IconContractFill = Object.assign(_IconContractFill, {
  install: (app: App) => {
    app.component(_IconContractFill.name, _IconContractFill);
  }
});

export default IconContractFill;