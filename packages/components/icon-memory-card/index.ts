import type { App } from 'vue';
import _IconMemoryCard from './icon-memory-card.vue';

const IconMemoryCard = Object.assign(_IconMemoryCard, {
  install: (app: App) => {
    app.component(_IconMemoryCard.name, _IconMemoryCard);
  }
});

export default IconMemoryCard;