import type { App } from 'vue';
import _IconNoShooting from './icon-no-shooting.vue';

const IconNoShooting = Object.assign(_IconNoShooting, {
  install: (app: App) => {
    app.component(_IconNoShooting.name, _IconNoShooting);
  }
});

export default IconNoShooting;