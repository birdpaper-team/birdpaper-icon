import type { App } from 'vue';
import _IconBrainLine from './icon-brain-line.vue';

const IconBrainLine = Object.assign(_IconBrainLine, {
  install: (app: App) => {
    app.component(_IconBrainLine.name, _IconBrainLine);
  }
});

export default IconBrainLine;