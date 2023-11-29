import type { App } from 'vue';
import _IconUnlink from './icon-unlink.vue';

const IconUnlink = Object.assign(_IconUnlink, {
  install: (app: App) => {
    app.component(_IconUnlink.name, _IconUnlink);
  }
});

export default IconUnlink;