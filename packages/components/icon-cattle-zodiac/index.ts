import type { App } from 'vue';
import _IconCattleZodiac from './icon-cattle-zodiac.vue';

const IconCattleZodiac = Object.assign(_IconCattleZodiac, {
  install: (app: App) => {
    app.component(_IconCattleZodiac.name, _IconCattleZodiac);
  }
});

export default IconCattleZodiac;