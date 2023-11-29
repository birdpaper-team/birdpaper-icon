import type { App } from 'vue';
import _IconLanding from './icon-landing.vue';

const IconLanding = Object.assign(_IconLanding, {
  install: (app: App) => {
    app.component(_IconLanding.name, _IconLanding);
  }
});

export default IconLanding;