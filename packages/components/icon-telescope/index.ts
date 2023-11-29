import type { App } from 'vue';
import _IconTelescope from './icon-telescope.vue';

const IconTelescope = Object.assign(_IconTelescope, {
  install: (app: App) => {
    app.component(_IconTelescope.name, _IconTelescope);
  }
});

export default IconTelescope;