import type { App } from 'vue';
import _IconTicket from './icon-ticket.vue';

const IconTicket = Object.assign(_IconTicket, {
  install: (app: App) => {
    app.component(_IconTicket.name, _IconTicket);
  }
});

export default IconTicket;