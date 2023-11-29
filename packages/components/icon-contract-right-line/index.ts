import type { App } from 'vue';
import _IconContractRightLine from './icon-contract-right-line.vue';

const IconContractRightLine = Object.assign(_IconContractRightLine, {
  install: (app: App) => {
    app.component(_IconContractRightLine.name, _IconContractRightLine);
  }
});

export default IconContractRightLine;