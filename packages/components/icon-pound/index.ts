import type { App } from 'vue';
import _IconPound from './icon-pound.vue';

const IconPound = Object.assign(_IconPound, {
  install: (app: App) => {
    app.component(_IconPound.name, _IconPound);
  }
});

export default IconPound;