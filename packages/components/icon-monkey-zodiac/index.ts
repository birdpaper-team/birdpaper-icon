import type { App } from 'vue';
import _IconMonkeyZodiac from './icon-monkey-zodiac.vue';

const IconMonkeyZodiac = Object.assign(_IconMonkeyZodiac, {
  install: (app: App) => {
    app.component(_IconMonkeyZodiac.name, _IconMonkeyZodiac);
  }
});

export default IconMonkeyZodiac;