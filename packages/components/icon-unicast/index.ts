import type { App } from 'vue';
import _IconUnicast from './icon-unicast.vue';

const IconUnicast = Object.assign(_IconUnicast, {
  install: (app: App) => {
    app.component(_IconUnicast.name, _IconUnicast);
  }
});

export default IconUnicast;