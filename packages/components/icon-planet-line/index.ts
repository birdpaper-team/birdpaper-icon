import type { App } from 'vue';
import _IconPlanetLine from './icon-planet-line.vue';

const IconPlanetLine = Object.assign(_IconPlanetLine, {
  install: (app: App) => {
    app.component(_IconPlanetLine.name, _IconPlanetLine);
  }
});

export default IconPlanetLine;