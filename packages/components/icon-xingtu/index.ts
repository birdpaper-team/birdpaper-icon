import type { App } from 'vue';
import _IconXingtu from './icon-xingtu.vue';

const IconXingtu = Object.assign(_IconXingtu, {
  install: (app: App) => {
    app.component(_IconXingtu.name, _IconXingtu);
  }
});

export default IconXingtu;