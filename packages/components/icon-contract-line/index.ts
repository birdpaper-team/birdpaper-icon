import type { App } from 'vue';
import _IconContractLine from './icon-contract-line.vue';

const IconContractLine = Object.assign(_IconContractLine, {
  install: (app: App) => {
    app.component(_IconContractLine.name, _IconContractLine);
  }
});

export default IconContractLine;