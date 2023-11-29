import type { App } from 'vue';
import _IconDropShadowLeft from './icon-drop-shadow-left.vue';

const IconDropShadowLeft = Object.assign(_IconDropShadowLeft, {
  install: (app: App) => {
    app.component(_IconDropShadowLeft.name, _IconDropShadowLeft);
  }
});

export default IconDropShadowLeft;