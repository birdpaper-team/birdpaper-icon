import type { App } from 'vue';
import _IconInvisionFill from './icon-invision-fill.vue';

const IconInvisionFill = Object.assign(_IconInvisionFill, {
  install: (app: App) => {
    app.component(_IconInvisionFill.name, _IconInvisionFill);
  }
});

export default IconInvisionFill;