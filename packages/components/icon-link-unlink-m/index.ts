import type { App } from 'vue';
import _IconLinkUnlinkM from './icon-link-unlink-m.vue';

const IconLinkUnlinkM = Object.assign(_IconLinkUnlinkM, {
  install: (app: App) => {
    app.component(_IconLinkUnlinkM.name, _IconLinkUnlinkM);
  }
});

export default IconLinkUnlinkM;