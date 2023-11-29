import type { App } from 'vue';
import _IconBread from './icon-bread.vue';

const IconBread = Object.assign(_IconBread, {
  install: (app: App) => {
    app.component(_IconBread.name, _IconBread);
  }
});

export default IconBread;