import type { App } from 'vue';
import _IconDiamonds from './icon-diamonds.vue';

const IconDiamonds = Object.assign(_IconDiamonds, {
  install: (app: App) => {
    app.component(_IconDiamonds.name, _IconDiamonds);
  }
});

export default IconDiamonds;