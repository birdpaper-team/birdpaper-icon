import type { App } from 'vue';
import _IconInnerShadowUp from './icon-inner-shadow-up.vue';

const IconInnerShadowUp = Object.assign(_IconInnerShadowUp, {
  install: (app: App) => {
    app.component(_IconInnerShadowUp.name, _IconInnerShadowUp);
  }
});

export default IconInnerShadowUp;