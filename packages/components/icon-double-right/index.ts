import type { App } from 'vue';
import _IconDoubleRight from './icon-double-right.vue';

const IconDoubleRight = Object.assign(_IconDoubleRight, {
  install: (app: App) => {
    app.component(_IconDoubleRight.name, _IconDoubleRight);
  }
});

export default IconDoubleRight;