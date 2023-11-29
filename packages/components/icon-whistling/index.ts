import type { App } from 'vue';
import _IconWhistling from './icon-whistling.vue';

const IconWhistling = Object.assign(_IconWhistling, {
  install: (app: App) => {
    app.component(_IconWhistling.name, _IconWhistling);
  }
});

export default IconWhistling;