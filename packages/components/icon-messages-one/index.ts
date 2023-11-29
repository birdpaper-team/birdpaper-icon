import type { App } from 'vue';
import _IconMessagesOne from './icon-messages-one.vue';

const IconMessagesOne = Object.assign(_IconMessagesOne, {
  install: (app: App) => {
    app.component(_IconMessagesOne.name, _IconMessagesOne);
  }
});

export default IconMessagesOne;