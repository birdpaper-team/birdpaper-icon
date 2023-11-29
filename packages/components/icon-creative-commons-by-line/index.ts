import type { App } from 'vue';
import _IconCreativeCommonsByLine from './icon-creative-commons-by-line.vue';

const IconCreativeCommonsByLine = Object.assign(_IconCreativeCommonsByLine, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsByLine.name, _IconCreativeCommonsByLine);
  }
});

export default IconCreativeCommonsByLine;