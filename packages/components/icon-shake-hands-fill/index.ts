import type { App } from 'vue';
import _IconShakeHandsFill from './icon-shake-hands-fill.vue';

const IconShakeHandsFill = Object.assign(_IconShakeHandsFill, {
  install: (app: App) => {
    app.component(_IconShakeHandsFill.name, _IconShakeHandsFill);
  }
});

export default IconShakeHandsFill;