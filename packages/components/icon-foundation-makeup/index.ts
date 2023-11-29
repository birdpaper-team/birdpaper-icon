import type { App } from 'vue';
import _IconFoundationMakeup from './icon-foundation-makeup.vue';

const IconFoundationMakeup = Object.assign(_IconFoundationMakeup, {
  install: (app: App) => {
    app.component(_IconFoundationMakeup.name, _IconFoundationMakeup);
  }
});

export default IconFoundationMakeup;