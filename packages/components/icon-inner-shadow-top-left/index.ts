import type { App } from 'vue';
import _IconInnerShadowTopLeft from './icon-inner-shadow-top-left.vue';

const IconInnerShadowTopLeft = Object.assign(_IconInnerShadowTopLeft, {
  install: (app: App) => {
    app.component(_IconInnerShadowTopLeft.name, _IconInnerShadowTopLeft);
  }
});

export default IconInnerShadowTopLeft;