import type { App } from 'vue';
import _IconContractUpDownLine from './icon-contract-up-down-line.vue';

const IconContractUpDownLine = Object.assign(_IconContractUpDownLine, {
  install: (app: App) => {
    app.component(_IconContractUpDownLine.name, _IconContractUpDownLine);
  }
});

export default IconContractUpDownLine;