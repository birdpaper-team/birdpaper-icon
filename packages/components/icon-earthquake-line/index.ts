import type { App } from 'vue';
import _IconEarthquakeLine from './icon-earthquake-line.vue';

const IconEarthquakeLine = Object.assign(_IconEarthquakeLine, {
  install: (app: App) => {
    app.component(_IconEarthquakeLine.name, _IconEarthquakeLine);
  }
});

export default IconEarthquakeLine;