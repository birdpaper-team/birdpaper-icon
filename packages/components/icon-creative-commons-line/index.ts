import type { App } from 'vue';
import _IconCreativeCommonsLine from './icon-creative-commons-line.vue';

const IconCreativeCommonsLine = Object.assign(_IconCreativeCommonsLine, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsLine.name, _IconCreativeCommonsLine);
  }
});

export default IconCreativeCommonsLine;