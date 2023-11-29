import type { App } from 'vue';
import _IconDongchedi from './icon-dongchedi.vue';

const IconDongchedi = Object.assign(_IconDongchedi, {
  install: (app: App) => {
    app.component(_IconDongchedi.name, _IconDongchedi);
  }
});

export default IconDongchedi;