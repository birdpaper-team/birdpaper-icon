import type { App } from 'vue';
import _IconAdobePhotoshop from './icon-adobe-photoshop.vue';

const IconAdobePhotoshop = Object.assign(_IconAdobePhotoshop, {
  install: (app: App) => {
    app.component(_IconAdobePhotoshop.name, _IconAdobePhotoshop);
  }
});

export default IconAdobePhotoshop;