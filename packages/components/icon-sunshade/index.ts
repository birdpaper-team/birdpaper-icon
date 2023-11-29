import type { App } from 'vue';
import _IconSunshade from './icon-sunshade.vue';

const IconSunshade = Object.assign(_IconSunshade, {
  install: (app: App) => {
    app.component(_IconSunshade.name, _IconSunshade);
  }
});

export default IconSunshade;