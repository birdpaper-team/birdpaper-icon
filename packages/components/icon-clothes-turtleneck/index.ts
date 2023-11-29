import type { App } from 'vue';
import _IconClothesTurtleneck from './icon-clothes-turtleneck.vue';

const IconClothesTurtleneck = Object.assign(_IconClothesTurtleneck, {
  install: (app: App) => {
    app.component(_IconClothesTurtleneck.name, _IconClothesTurtleneck);
  }
});

export default IconClothesTurtleneck;