import type { App } from 'vue';
import _IconEthFill from './icon-eth-fill.vue';

const IconEthFill = Object.assign(_IconEthFill, {
  install: (app: App) => {
    app.component(_IconEthFill.name, _IconEthFill);
  }
});

export default IconEthFill;