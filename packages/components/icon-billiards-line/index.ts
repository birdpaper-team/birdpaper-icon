import type { App } from 'vue';
import _IconBilliardsLine from './icon-billiards-line.vue';

const IconBilliardsLine = Object.assign(_IconBilliardsLine, {
  install: (app: App) => {
    app.component(_IconBilliardsLine.name, _IconBilliardsLine);
  }
});

export default IconBilliardsLine;