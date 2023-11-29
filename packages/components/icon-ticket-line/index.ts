import type { App } from 'vue';
import _IconTicketLine from './icon-ticket-line.vue';

const IconTicketLine = Object.assign(_IconTicketLine, {
  install: (app: App) => {
    app.component(_IconTicketLine.name, _IconTicketLine);
  }
});

export default IconTicketLine;