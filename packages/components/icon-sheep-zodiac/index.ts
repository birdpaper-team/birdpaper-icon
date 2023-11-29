import type { App } from 'vue';
import _IconSheepZodiac from './icon-sheep-zodiac.vue';

const IconSheepZodiac = Object.assign(_IconSheepZodiac, {
  install: (app: App) => {
    app.component(_IconSheepZodiac.name, _IconSheepZodiac);
  }
});

export default IconSheepZodiac;