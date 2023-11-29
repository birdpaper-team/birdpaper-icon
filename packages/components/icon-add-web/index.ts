import type { App } from 'vue';
import _IconAddWeb from './icon-add-web.vue';

const IconAddWeb = Object.assign(_IconAddWeb, {
  install: (app: App) => {
    app.component(_IconAddWeb.name, _IconAddWeb);
  }
});

export default IconAddWeb;