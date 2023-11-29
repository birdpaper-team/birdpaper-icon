import type { App } from 'vue';
import _IconInnerShadowTopRight from './icon-inner-shadow-top-right.vue';

const IconInnerShadowTopRight = Object.assign(_IconInnerShadowTopRight, {
  install: (app: App) => {
    app.component(_IconInnerShadowTopRight.name, _IconInnerShadowTopRight);
  }
});

export default IconInnerShadowTopRight;