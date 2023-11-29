import type { App } from 'vue';
import _IconAd from './icon-ad.vue';

const IconAd = Object.assign(_IconAd, {
  install: (app: App) => {
    app.component(_IconAd.name, _IconAd);
  }
});

export default IconAd;