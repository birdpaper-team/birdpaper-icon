import type { App } from 'vue';
import _IconBarberBrush from './icon-barber-brush.vue';

const IconBarberBrush = Object.assign(_IconBarberBrush, {
  install: (app: App) => {
    app.component(_IconBarberBrush.name, _IconBarberBrush);
  }
});

export default IconBarberBrush;