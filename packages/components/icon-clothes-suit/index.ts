import type { App } from 'vue';
import _IconClothesSuit from './icon-clothes-suit.vue';

const IconClothesSuit = Object.assign(_IconClothesSuit, {
  install: (app: App) => {
    app.component(_IconClothesSuit.name, _IconClothesSuit);
  }
});

export default IconClothesSuit;