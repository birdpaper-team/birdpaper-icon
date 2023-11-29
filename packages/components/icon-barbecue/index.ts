import type { App } from 'vue';
import _IconBarbecue from './icon-barbecue.vue';

const IconBarbecue = Object.assign(_IconBarbecue, {
  install: (app: App) => {
    app.component(_IconBarbecue.name, _IconBarbecue);
  }
});

export default IconBarbecue;