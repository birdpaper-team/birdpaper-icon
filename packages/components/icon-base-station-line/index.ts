import type { App } from 'vue';
import _IconBaseStationLine from './icon-base-station-line.vue';

const IconBaseStationLine = Object.assign(_IconBaseStationLine, {
  install: (app: App) => {
    app.component(_IconBaseStationLine.name, _IconBaseStationLine);
  }
});

export default IconBaseStationLine;