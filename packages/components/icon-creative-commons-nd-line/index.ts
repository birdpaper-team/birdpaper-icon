import type { App } from 'vue';
import _IconCreativeCommonsNdLine from './icon-creative-commons-nd-line.vue';

const IconCreativeCommonsNdLine = Object.assign(_IconCreativeCommonsNdLine, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsNdLine.name, _IconCreativeCommonsNdLine);
  }
});

export default IconCreativeCommonsNdLine;