import type { App } from 'vue';
import _IconClapperboardLine from './icon-clapperboard-line.vue';

const IconClapperboardLine = Object.assign(_IconClapperboardLine, {
  install: (app: App) => {
    app.component(_IconClapperboardLine.name, _IconClapperboardLine);
  }
});

export default IconClapperboardLine;