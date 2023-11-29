import type { App } from 'vue';
import _IconTicketsOne from './icon-tickets-one.vue';

const IconTicketsOne = Object.assign(_IconTicketsOne, {
  install: (app: App) => {
    app.component(_IconTicketsOne.name, _IconTicketsOne);
  }
});

export default IconTicketsOne;