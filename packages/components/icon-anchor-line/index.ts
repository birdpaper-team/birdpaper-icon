import type { App } from 'vue';
import _IconAnchorLine from './icon-anchor-line.vue';

const IconAnchorLine = Object.assign(_IconAnchorLine, {
  install: (app: App) => {
    app.component(_IconAnchorLine.name, _IconAnchorLine);
  }
});

export default IconAnchorLine;