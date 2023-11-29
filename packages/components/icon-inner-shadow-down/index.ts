import type { App } from 'vue';
import _IconInnerShadowDown from './icon-inner-shadow-down.vue';

const IconInnerShadowDown = Object.assign(_IconInnerShadowDown, {
  install: (app: App) => {
    app.component(_IconInnerShadowDown.name, _IconInnerShadowDown);
  }
});

export default IconInnerShadowDown;