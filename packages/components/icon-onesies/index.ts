import type { App } from 'vue';
import _IconOnesies from './icon-onesies.vue';

const IconOnesies = Object.assign(_IconOnesies, {
  install: (app: App) => {
    app.component(_IconOnesies.name, _IconOnesies);
  }
});

export default IconOnesies;