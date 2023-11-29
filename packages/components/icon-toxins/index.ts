import type { App } from 'vue';
import _IconToxins from './icon-toxins.vue';

const IconToxins = Object.assign(_IconToxins, {
  install: (app: App) => {
    app.component(_IconToxins.name, _IconToxins);
  }
});

export default IconToxins;