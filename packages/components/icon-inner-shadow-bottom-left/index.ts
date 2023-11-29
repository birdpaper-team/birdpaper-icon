import type { App } from 'vue';
import _IconInnerShadowBottomLeft from './icon-inner-shadow-bottom-left.vue';

const IconInnerShadowBottomLeft = Object.assign(_IconInnerShadowBottomLeft, {
  install: (app: App) => {
    app.component(_IconInnerShadowBottomLeft.name, _IconInnerShadowBottomLeft);
  }
});

export default IconInnerShadowBottomLeft;