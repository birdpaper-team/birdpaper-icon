import type { App } from 'vue';
import _IconPresentationLine from './icon-presentation-line.vue';

const IconPresentationLine = Object.assign(_IconPresentationLine, {
  install: (app: App) => {
    app.component(_IconPresentationLine.name, _IconPresentationLine);
  }
});

export default IconPresentationLine;