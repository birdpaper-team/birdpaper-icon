import type { App } from 'vue';
import _IconSport from './icon-sport.vue';

const IconSport = Object.assign(_IconSport, {
  install: (app: App) => {
    app.component(_IconSport.name, _IconSport);
  }
});

export default IconSport;