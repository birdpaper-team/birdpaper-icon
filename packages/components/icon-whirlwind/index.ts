import type { App } from 'vue';
import _IconWhirlwind from './icon-whirlwind.vue';

const IconWhirlwind = Object.assign(_IconWhirlwind, {
  install: (app: App) => {
    app.component(_IconWhirlwind.name, _IconWhirlwind);
  }
});

export default IconWhirlwind;