import type { App } from 'vue';
import _IconSunbath from './icon-sunbath.vue';

const IconSunbath = Object.assign(_IconSunbath, {
  install: (app: App) => {
    app.component(_IconSunbath.name, _IconSunbath);
  }
});

export default IconSunbath;