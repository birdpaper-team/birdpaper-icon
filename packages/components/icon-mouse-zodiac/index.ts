import type { App } from 'vue';
import _IconMouseZodiac from './icon-mouse-zodiac.vue';

const IconMouseZodiac = Object.assign(_IconMouseZodiac, {
  install: (app: App) => {
    app.component(_IconMouseZodiac.name, _IconMouseZodiac);
  }
});

export default IconMouseZodiac;