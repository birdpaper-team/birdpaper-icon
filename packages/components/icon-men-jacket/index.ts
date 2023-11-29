import type { App } from 'vue';
import _IconMenJacket from './icon-men-jacket.vue';

const IconMenJacket = Object.assign(_IconMenJacket, {
  install: (app: App) => {
    app.component(_IconMenJacket.name, _IconMenJacket);
  }
});

export default IconMenJacket;