import type { App } from 'vue';
import _IconPlanetFill from './icon-planet-fill.vue';

const IconPlanetFill = Object.assign(_IconPlanetFill, {
  install: (app: App) => {
    app.component(_IconPlanetFill.name, _IconPlanetFill);
  }
});

export default IconPlanetFill;