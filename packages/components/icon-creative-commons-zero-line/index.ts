import type { App } from 'vue';
import _IconCreativeCommonsZeroLine from './icon-creative-commons-zero-line.vue';

const IconCreativeCommonsZeroLine = Object.assign(_IconCreativeCommonsZeroLine, {
  install: (app: App) => {
    app.component(_IconCreativeCommonsZeroLine.name, _IconCreativeCommonsZeroLine);
  }
});

export default IconCreativeCommonsZeroLine;