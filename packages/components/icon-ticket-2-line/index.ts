import type { App } from 'vue';
import _IconTicket2Line from './icon-ticket-2-line.vue';

const IconTicket2Line = Object.assign(_IconTicket2Line, {
  install: (app: App) => {
    app.component(_IconTicket2Line.name, _IconTicket2Line);
  }
});

export default IconTicket2Line;