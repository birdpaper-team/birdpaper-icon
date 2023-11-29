import type { App } from 'vue';
import _IconKitchenKnife from './icon-kitchen-knife.vue';

const IconKitchenKnife = Object.assign(_IconKitchenKnife, {
  install: (app: App) => {
    app.component(_IconKitchenKnife.name, _IconKitchenKnife);
  }
});

export default IconKitchenKnife;