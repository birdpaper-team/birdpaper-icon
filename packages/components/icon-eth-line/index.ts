import type { App } from 'vue';
import _IconEthLine from './icon-eth-line.vue';

const IconEthLine = Object.assign(_IconEthLine, {
  install: (app: App) => {
    app.component(_IconEthLine.name, _IconEthLine);
  }
});

export default IconEthLine;