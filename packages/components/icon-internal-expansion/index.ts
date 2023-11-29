import type { App } from 'vue';
import _IconInternalExpansion from './icon-internal-expansion.vue';

const IconInternalExpansion = Object.assign(_IconInternalExpansion, {
  install: (app: App) => {
    app.component(_IconInternalExpansion.name, _IconInternalExpansion);
  }
});

export default IconInternalExpansion;