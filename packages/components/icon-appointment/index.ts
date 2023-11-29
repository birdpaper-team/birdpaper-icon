import type { App } from 'vue';
import _IconAppointment from './icon-appointment.vue';

const IconAppointment = Object.assign(_IconAppointment, {
  install: (app: App) => {
    app.component(_IconAppointment.name, _IconAppointment);
  }
});

export default IconAppointment;