import type { App } from 'vue';
import _IconTicketFill from './icon-ticket-fill.vue';

const IconTicketFill = Object.assign(_IconTicketFill, {
  install: (app: App) => {
    app.component(_IconTicketFill.name, _IconTicketFill);
  }
});

export default IconTicketFill;