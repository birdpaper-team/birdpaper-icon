import type { App } from 'vue';
import _IconBlueskyLine from './icon-bluesky-line.vue';

const IconBlueskyLine = Object.assign(_IconBlueskyLine, {
  install: (app: App) => {
    app.component(_IconBlueskyLine.name, _IconBlueskyLine);
  }
});

export default IconBlueskyLine;