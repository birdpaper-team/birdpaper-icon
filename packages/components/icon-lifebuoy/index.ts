import type { App } from 'vue';
import _IconLifebuoy from './icon-lifebuoy.vue';

const IconLifebuoy = Object.assign(_IconLifebuoy, {
  install: (app: App) => {
    app.component(_IconLifebuoy.name, _IconLifebuoy);
  }
});

export default IconLifebuoy;