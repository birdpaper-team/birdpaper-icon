import type { App } from 'vue';
import _IconContractLeftRightLine from './icon-contract-left-right-line.vue';

const IconContractLeftRightLine = Object.assign(_IconContractLeftRightLine, {
  install: (app: App) => {
    app.component(_IconContractLeftRightLine.name, _IconContractLeftRightLine);
  }
});

export default IconContractLeftRightLine;