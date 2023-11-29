import type { App } from 'vue';
import _IconTicketsTwo from './icon-tickets-two.vue';

const IconTicketsTwo = Object.assign(_IconTicketsTwo, {
  install: (app: App) => {
    app.component(_IconTicketsTwo.name, _IconTicketsTwo);
  }
});

export default IconTicketsTwo;