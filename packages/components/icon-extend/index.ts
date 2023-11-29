import type { App } from 'vue';
import _IconExtend from './icon-extend.vue';

const IconExtend = Object.assign(_IconExtend, {
  install: (app: App) => {
    app.component(_IconExtend.name, _IconExtend);
  }
});

export default IconExtend;