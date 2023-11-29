import type { App } from 'vue';
import _IconContractLeftFill from './icon-contract-left-fill.vue';

const IconContractLeftFill = Object.assign(_IconContractLeftFill, {
  install: (app: App) => {
    app.component(_IconContractLeftFill.name, _IconContractLeftFill);
  }
});

export default IconContractLeftFill;