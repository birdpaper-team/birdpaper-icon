import type { App } from 'vue';
import _IconCreativeCommonsSaLine from './icon-creative-commons-sa-line.vue';

const IconCreativeCommonsSaLine = Object.assign(_IconCreativeCommonsSaLine, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsSaLine.name, _IconCreativeCommonsSaLine);
  }
});

export default IconCreativeCommonsSaLine;