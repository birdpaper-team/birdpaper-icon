import type { App } from 'vue';
import _IconDiamond from './icon-diamond.vue';

const IconDiamond = Object.assign(_IconDiamond, {
  install: (app: App) => {
    app.component(_IconDiamond.name, _IconDiamond);
  }
});

export default IconDiamond;