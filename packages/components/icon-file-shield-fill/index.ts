import type { App } from 'vue';
import _IconFileShieldFill from './icon-file-shield-fill.vue';

const IconFileShieldFill = Object.assign(_IconFileShieldFill, {
  install: (app: App) => {
    app.component(_IconFileShieldFill.name, _IconFileShieldFill);
  }
});

export default IconFileShieldFill;