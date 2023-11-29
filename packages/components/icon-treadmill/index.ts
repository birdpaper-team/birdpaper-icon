import type { App } from 'vue';
import _IconTreadmill from './icon-treadmill.vue';

const IconTreadmill = Object.assign(_IconTreadmill, {
  install: (app: App) => {
    app.component(_IconTreadmill.name, _IconTreadmill);
  }
});

export default IconTreadmill;