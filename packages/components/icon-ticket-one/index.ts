import type { App } from 'vue';
import _IconTicketOne from './icon-ticket-one.vue';

const IconTicketOne = Object.assign(_IconTicketOne, {
  install: (app: App) => {
    app.component(_IconTicketOne.name, _IconTicketOne);
  }
});

export default IconTicketOne;