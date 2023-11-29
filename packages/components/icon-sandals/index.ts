import type { App } from 'vue';
import _IconSandals from './icon-sandals.vue';

const IconSandals = Object.assign(_IconSandals, {
  install: (app: App) => {
    app.component(_IconSandals.name, _IconSandals);
  }
});

export default IconSandals;