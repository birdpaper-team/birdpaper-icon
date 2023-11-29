import type { App } from 'vue';
import _IconGoogleAds from './icon-google-ads.vue';

const IconGoogleAds = Object.assign(_IconGoogleAds, {
  install: (app: App) => {
    app.component(_IconGoogleAds.name, _IconGoogleAds);
  }
});

export default IconGoogleAds;