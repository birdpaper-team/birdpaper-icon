import type { App } from 'vue';
import _IconBellFill from './icon-bell-fill.vue';

const IconBellFill = Object.assign(_IconBellFill, {
  install: (app: App) => {
    app.component(_IconBellFill.name, _IconBellFill);
  }
});

export default IconBellFill;