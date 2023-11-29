import type { App } from 'vue';
import _IconMagicWand from './icon-magic-wand.vue';

const IconMagicWand = Object.assign(_IconMagicWand, {
  install: (app: App) => {
    app.component(_IconMagicWand.name, _IconMagicWand);
  }
});

export default IconMagicWand;