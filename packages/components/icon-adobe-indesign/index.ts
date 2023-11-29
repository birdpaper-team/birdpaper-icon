import type { App } from 'vue';
import _IconAdobeIndesign from './icon-adobe-indesign.vue';

const IconAdobeIndesign = Object.assign(_IconAdobeIndesign, {
  install: (app: App) => {
    app.component(_IconAdobeIndesign.name, _IconAdobeIndesign);
  }
});

export default IconAdobeIndesign;