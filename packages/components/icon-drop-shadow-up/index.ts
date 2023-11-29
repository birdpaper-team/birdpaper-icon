import type { App } from 'vue';
import _IconDropShadowUp from './icon-drop-shadow-up.vue';

const IconDropShadowUp = Object.assign(_IconDropShadowUp, {
  install: (app: App) => {
    app.component(_IconDropShadowUp.name, _IconDropShadowUp);
  }
});

export default IconDropShadowUp;