import type { App } from 'vue';
import _IconImbalance from './icon-imbalance.vue';

const IconImbalance = Object.assign(_IconImbalance, {
  install: (app: App) => {
    app.component(_IconImbalance.name, _IconImbalance);
  }
});

export default IconImbalance;