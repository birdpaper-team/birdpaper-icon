import type { App } from 'vue';
import _IconAdobeLightroom from './icon-adobe-lightroom.vue';

const IconAdobeLightroom = Object.assign(_IconAdobeLightroom, {
  install: (app: App) => {
    app.component(_IconAdobeLightroom.name, _IconAdobeLightroom);
  }
});

export default IconAdobeLightroom;