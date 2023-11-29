import type { App } from 'vue';
import _IconInfinityLine from './icon-infinity-line.vue';

const IconInfinityLine = Object.assign(_IconInfinityLine, {
  install: (app: App) => {
    app.component(_IconInfinityLine.name, _IconInfinityLine);
  }
});

export default IconInfinityLine;