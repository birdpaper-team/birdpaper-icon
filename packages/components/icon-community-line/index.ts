import type { App } from 'vue';
import _IconCommunityLine from './icon-community-line.vue';

const IconCommunityLine = Object.assign(_IconCommunityLine, {
  install: (app: App) => {
    app.component(_IconCommunityLine.name, _IconCommunityLine);
  }
});

export default IconCommunityLine;