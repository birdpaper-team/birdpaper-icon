import type { App } from 'vue';
import _IconCommodity from './icon-commodity.vue';

const IconCommodity = Object.assign(_IconCommodity, {
  install: (app: App) => {
    app.component(_IconCommodity.name, _IconCommodity);
  }
});

export default IconCommodity;