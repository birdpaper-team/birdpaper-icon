import type { App } from 'vue';
import _IconGogglesLine from './icon-goggles-line.vue';

const IconGogglesLine = Object.assign(_IconGogglesLine, {
  install: (app: App) => {
    app.component(_IconGogglesLine.name, _IconGogglesLine);
  }
});

export default IconGogglesLine;