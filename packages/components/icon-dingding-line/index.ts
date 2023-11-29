import type { App } from 'vue';
import _IconDingdingLine from './icon-dingding-line.vue';

const IconDingdingLine = Object.assign(_IconDingdingLine, {
  install: (app: App) => {
    app.component(_IconDingdingLine.name, _IconDingdingLine);
  }
});

export default IconDingdingLine;