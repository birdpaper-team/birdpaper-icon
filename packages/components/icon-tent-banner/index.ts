import type { App } from 'vue';
import _IconTentBanner from './icon-tent-banner.vue';

const IconTentBanner = Object.assign(_IconTentBanner, {
  install: (app: App) => {
    app.component(_IconTentBanner.name, _IconTentBanner);
  }
});

export default IconTentBanner;