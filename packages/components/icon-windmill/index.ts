import type { App } from 'vue';
import _IconWindmill from './icon-windmill.vue';

const IconWindmill = Object.assign(_IconWindmill, {
  install: (app: App) => {
    app.component(_IconWindmill.name, _IconWindmill);
  }
});

export default IconWindmill;