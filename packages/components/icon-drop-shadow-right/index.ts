import type { App } from 'vue';
import _IconDropShadowRight from './icon-drop-shadow-right.vue';

const IconDropShadowRight = Object.assign(_IconDropShadowRight, {
  install: (app: App) => {
    app.component(_IconDropShadowRight.name, _IconDropShadowRight);
  }
});

export default IconDropShadowRight;