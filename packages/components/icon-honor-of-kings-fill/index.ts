import type { App } from 'vue';
import _IconHonorOfKingsFill from './icon-honor-of-kings-fill.vue';

const IconHonorOfKingsFill = Object.assign(_IconHonorOfKingsFill, {
  install: (app: App) => {
    app.component(_IconHonorOfKingsFill.name, _IconHonorOfKingsFill);
  }
});

export default IconHonorOfKingsFill;