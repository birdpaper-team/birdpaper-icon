import type { App } from 'vue';
import _IconInsertCard from './icon-insert-card.vue';

const IconInsertCard = Object.assign(_IconInsertCard, {
  install: (app: App) => {
    app.component(_IconInsertCard.name, _IconInsertCard);
  }
});

export default IconInsertCard;