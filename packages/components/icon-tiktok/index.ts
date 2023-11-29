import type { App } from 'vue';
import _IconTiktok from './icon-tiktok.vue';

const IconTiktok = Object.assign(_IconTiktok, {
  install: (app: App) => {
    app.component(_IconTiktok.name, _IconTiktok);
  }
});

export default IconTiktok;