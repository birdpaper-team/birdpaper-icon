import type { App } from 'vue';
import _IconCreativeCommonsNcLine from './icon-creative-commons-nc-line.vue';

const IconCreativeCommonsNcLine = Object.assign(_IconCreativeCommonsNcLine, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsNcLine.name, _IconCreativeCommonsNcLine);
  }
});

export default IconCreativeCommonsNcLine;