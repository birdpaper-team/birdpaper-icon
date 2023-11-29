import type { App } from 'vue';
import _IconSperm from './icon-sperm.vue';

const IconSperm = Object.assign(_IconSperm, {
  install: (app: App) => {
    app.component(_IconSperm.name, _IconSperm);
  }
});

export default IconSperm;