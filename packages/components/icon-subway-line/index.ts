import type { App } from 'vue';
import _IconSubwayLine from './icon-subway-line.vue';

const IconSubwayLine = Object.assign(_IconSubwayLine, {
  install: (app: App) => {
    app.component(_IconSubwayLine.name, _IconSubwayLine);
  }
});

export default IconSubwayLine;