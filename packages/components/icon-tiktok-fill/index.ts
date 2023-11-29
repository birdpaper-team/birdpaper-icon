import type { App } from 'vue';
import _IconTiktokFill from './icon-tiktok-fill.vue';

const IconTiktokFill = Object.assign(_IconTiktokFill, {
  install: (app: App) => {
    app.component(_IconTiktokFill.name, _IconTiktokFill);
  }
});

export default IconTiktokFill;