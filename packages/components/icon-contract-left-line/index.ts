import type { App } from 'vue';
import _IconContractLeftLine from './icon-contract-left-line.vue';

const IconContractLeftLine = Object.assign(_IconContractLeftLine, {
  install: (app: App) => {
    app.component(_IconContractLeftLine.name, _IconContractLeftLine);
  }
});

export default IconContractLeftLine;