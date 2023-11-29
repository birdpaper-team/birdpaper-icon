import type { App } from 'vue';
import _IconDragonZodiac from './icon-dragon-zodiac.vue';

const IconDragonZodiac = Object.assign(_IconDragonZodiac, {
  install: (app: App) => {
    app.component(_IconDragonZodiac.name, _IconDragonZodiac);
  }
});

export default IconDragonZodiac;