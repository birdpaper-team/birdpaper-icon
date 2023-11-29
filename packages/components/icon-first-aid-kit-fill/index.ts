import type { App } from 'vue';
import _IconFirstAidKitFill from './icon-first-aid-kit-fill.vue';

const IconFirstAidKitFill = Object.assign(_IconFirstAidKitFill, {
  install: (app: App) => {
    app.component(_IconFirstAidKitFill.name, _IconFirstAidKitFill);
  }
});

export default IconFirstAidKitFill;