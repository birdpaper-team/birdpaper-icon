import type { App } from 'vue';
import _IconTuchong from './icon-tuchong.vue';

const IconTuchong = Object.assign(_IconTuchong, {
  install: (app: App) => {
    app.component(_IconTuchong.name, _IconTuchong);
  }
});

export default IconTuchong;