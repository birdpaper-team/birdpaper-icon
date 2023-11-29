import type { App } from 'vue';
import _IconNftFill from './icon-nft-fill.vue';

const IconNftFill = Object.assign(_IconNftFill, {
  install: (app: App) => {
    app.component(_IconNftFill.name, _IconNftFill);
  }
});

export default IconNftFill;