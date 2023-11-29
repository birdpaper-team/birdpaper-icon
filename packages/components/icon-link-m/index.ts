import type { App } from 'vue';
import _IconLinkM from './icon-link-m.vue';

const IconLinkM = Object.assign(_IconLinkM, {
  install: (app: App) => {
    app.component(_IconLinkM.name, _IconLinkM);
  }
});

export default IconLinkM;