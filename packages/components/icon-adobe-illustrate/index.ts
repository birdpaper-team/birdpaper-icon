import type { App } from 'vue';
import _IconAdobeIllustrate from './icon-adobe-illustrate.vue';

const IconAdobeIllustrate = Object.assign(_IconAdobeIllustrate, {
  install: (app: App) => {
    app.component(_IconAdobeIllustrate.name, _IconAdobeIllustrate);
  }
});

export default IconAdobeIllustrate;