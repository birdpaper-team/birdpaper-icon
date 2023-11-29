import type { App } from 'vue';
import _IconRouterLine from './icon-router-line.vue';

const IconRouterLine = Object.assign(_IconRouterLine, {
  install: (app: App) => {
    app.component(_IconRouterLine.name, _IconRouterLine);
  }
});

export default IconRouterLine;