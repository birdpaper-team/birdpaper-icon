import type { App } from 'vue';
import _IconUserLocationLine from './icon-user-location-line.vue';

const IconUserLocationLine = Object.assign(_IconUserLocationLine, {
  install: (app: App) => {
    app.component(_IconUserLocationLine.name, _IconUserLocationLine);
  }
});

export default IconUserLocationLine;