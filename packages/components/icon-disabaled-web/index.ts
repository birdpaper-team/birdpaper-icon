import type { App } from 'vue';
import _IconDisabaledWeb from './icon-disabaled-web.vue';

const IconDisabaledWeb = Object.assign(_IconDisabaledWeb, {
  install: (app: App) => {
    app.component(_IconDisabaledWeb.name, _IconDisabaledWeb);
  }
});

export default IconDisabaledWeb;