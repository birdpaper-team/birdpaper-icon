import type { App } from 'vue';
import _IconBeerLine from './icon-beer-line.vue';

const IconBeerLine = Object.assign(_IconBeerLine, {
  install: (app: App) => {
    app.component(_IconBeerLine.name, _IconBeerLine);
  }
});

export default IconBeerLine;