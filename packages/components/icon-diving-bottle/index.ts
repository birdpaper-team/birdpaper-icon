import type { App } from 'vue';
import _IconDivingBottle from './icon-diving-bottle.vue';

const IconDivingBottle = Object.assign(_IconDivingBottle, {
  install: (app: App) => {
    app.component(_IconDivingBottle.name, _IconDivingBottle);
  }
});

export default IconDivingBottle;