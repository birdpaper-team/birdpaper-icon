import type { App } from 'vue';
import _IconLifebuoyFill from './icon-lifebuoy-fill.vue';

const IconLifebuoyFill = Object.assign(_IconLifebuoyFill, {
  install: (app: App) => {
    app.component(_IconLifebuoyFill.name, _IconLifebuoyFill);
  }
});

export default IconLifebuoyFill;