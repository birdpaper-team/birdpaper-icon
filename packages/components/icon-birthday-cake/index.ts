import type { App } from 'vue';
import _IconBirthdayCake from './icon-birthday-cake.vue';

const IconBirthdayCake = Object.assign(_IconBirthdayCake, {
  install: (app: App) => {
    app.component(_IconBirthdayCake.name, _IconBirthdayCake);
  }
});

export default IconBirthdayCake;