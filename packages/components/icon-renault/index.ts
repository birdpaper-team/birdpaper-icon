import type { App } from 'vue';
import _IconRenault from './icon-renault.vue';

const IconRenault = Object.assign(_IconRenault, {
  install: (app: App) => {
    app.component(_IconRenault.name, _IconRenault);
  }
});

export default IconRenault;