import type { App } from 'vue';
import _IconClothesDiapers from './icon-clothes-diapers.vue';

const IconClothesDiapers = Object.assign(_IconClothesDiapers, {
  install: (app: App) => {
    app.component(_IconClothesDiapers.name, _IconClothesDiapers);
  }
});

export default IconClothesDiapers;