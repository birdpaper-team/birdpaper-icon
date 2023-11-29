import type { App } from 'vue';
import _IconStraightRazor from './icon-straight-razor.vue';

const IconStraightRazor = Object.assign(_IconStraightRazor, {
  install: (app: App) => {
    app.component(_IconStraightRazor.name, _IconStraightRazor);
  }
});

export default IconStraightRazor;