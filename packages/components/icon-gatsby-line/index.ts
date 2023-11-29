import type { App } from 'vue';
import _IconGatsbyLine from './icon-gatsby-line.vue';

const IconGatsbyLine = Object.assign(_IconGatsbyLine, {
  install: (app: App) => {
    app.component(_IconGatsbyLine.name, _IconGatsbyLine);
  }
});

export default IconGatsbyLine;