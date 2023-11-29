import type { App } from 'vue';
import _IconBlossom from './icon-blossom.vue';

const IconBlossom = Object.assign(_IconBlossom, {
  install: (app: App) => {
    app.component(_IconBlossom.name, _IconBlossom);
  }
});

export default IconBlossom;