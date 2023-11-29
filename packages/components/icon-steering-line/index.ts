import type { App } from 'vue';
import _IconSteeringLine from './icon-steering-line.vue';

const IconSteeringLine = Object.assign(_IconSteeringLine, {
  install: (app: App) => {
    app.component(_IconSteeringLine.name, _IconSteeringLine);
  }
});

export default IconSteeringLine;