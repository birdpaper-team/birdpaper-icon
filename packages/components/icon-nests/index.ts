import type { App } from 'vue';
import _IconNests from './icon-nests.vue';

const IconNests = Object.assign(_IconNests, {
  install: (app: App) => {
    app.component(_IconNests.name, _IconNests);
  }
});

export default IconNests;