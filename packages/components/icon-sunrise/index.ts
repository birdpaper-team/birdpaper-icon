import type { App } from 'vue';
import _IconSunrise from './icon-sunrise.vue';

const IconSunrise = Object.assign(_IconSunrise, {
  install: (app: App) => {
    app.component(_IconSunrise.name, _IconSunrise);
  }
});

export default IconSunrise;