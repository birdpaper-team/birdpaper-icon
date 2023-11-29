import type { App } from 'vue';
import _IconInnerShadowRight from './icon-inner-shadow-right.vue';

const IconInnerShadowRight = Object.assign(_IconInnerShadowRight, {
  install: (app: App) => {
    app.component(_IconInnerShadowRight.name, _IconInnerShadowRight);
  }
});

export default IconInnerShadowRight;