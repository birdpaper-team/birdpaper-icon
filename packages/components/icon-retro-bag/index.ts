import type { App } from 'vue';
import _IconRetroBag from './icon-retro-bag.vue';

const IconRetroBag = Object.assign(_IconRetroBag, {
  install: (app: App) => {
    app.component(_IconRetroBag.name, _IconRetroBag);
  }
});

export default IconRetroBag;