import type { App } from 'vue';
import _IconBilliardsFill from './icon-billiards-fill.vue';

const IconBilliardsFill = Object.assign(_IconBilliardsFill, {
  install: (app: App) => {
    app.component(_IconBilliardsFill.name, _IconBilliardsFill);
  }
});

export default IconBilliardsFill;