import type { App } from 'vue';
import _IconTaobaoLine from './icon-taobao-line.vue';

const IconTaobaoLine = Object.assign(_IconTaobaoLine, {
  install: (app: App) => {
    app.component(_IconTaobaoLine.name, _IconTaobaoLine);
  }
});

export default IconTaobaoLine;