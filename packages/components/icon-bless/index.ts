import type { App } from 'vue';
import _IconBless from './icon-bless.vue';

const IconBless = Object.assign(_IconBless, {
  install: (app: App) => {
    app.component(_IconBless.name, _IconBless);
  }
});

export default IconBless;