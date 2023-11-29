import type { App } from 'vue';
import _IconTicketsChecked from './icon-tickets-checked.vue';

const IconTicketsChecked = Object.assign(_IconTicketsChecked, {
  install: (app: App) => {
    app.component(_IconTicketsChecked.name, _IconTicketsChecked);
  }
});

export default IconTicketsChecked;