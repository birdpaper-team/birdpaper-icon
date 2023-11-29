import type { App } from 'vue';
import _IconOutbound from './icon-outbound.vue';

const IconOutbound = Object.assign(_IconOutbound, {
  install: (app: App) => {
    app.component(_IconOutbound.name, _IconOutbound);
  }
});

export default IconOutbound;