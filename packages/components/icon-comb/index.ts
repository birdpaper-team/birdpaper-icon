import type { App } from 'vue';
import _IconComb from './icon-comb.vue';

const IconComb = Object.assign(_IconComb, {
  install: (app: App) => {
    app.component(_IconComb.name, _IconComb);
  }
});

export default IconComb;