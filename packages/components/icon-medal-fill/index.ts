import type { App } from 'vue';
import _IconMedalFill from './icon-medal-fill.vue';

const IconMedalFill = Object.assign(_IconMedalFill, {
  install: (app: App) => {
    app.component(_IconMedalFill.name, _IconMedalFill);
  }
});

export default IconMedalFill;