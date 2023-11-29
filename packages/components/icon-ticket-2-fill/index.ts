import type { App } from 'vue';
import _IconTicket2Fill from './icon-ticket-2-fill.vue';

const IconTicket2Fill = Object.assign(_IconTicket2Fill, {
  install: (app: App) => {
    app.component(_IconTicket2Fill.name, _IconTicket2Fill);
  }
});

export default IconTicket2Fill;