import type { App } from 'vue';
import _IconUbuntuFill from './icon-ubuntu-fill.vue';

const IconUbuntuFill = Object.assign(_IconUbuntuFill, {
  install: (app: App) => {
    app.component(_IconUbuntuFill.name, _IconUbuntuFill);
  }
});

export default IconUbuntuFill;