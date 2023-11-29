import type { App } from 'vue';
import _IconBarberClippers from './icon-barber-clippers.vue';

const IconBarberClippers = Object.assign(_IconBarberClippers, {
  install: (app: App) => {
    app.component(_IconBarberClippers.name, _IconBarberClippers);
  }
});

export default IconBarberClippers;