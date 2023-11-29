import type { App } from 'vue';
import _IconViewGridCard from './icon-view-grid-card.vue';

const IconViewGridCard = Object.assign(_IconViewGridCard, {
  install: (app: App) => {
    app.component(_IconViewGridCard.name, _IconViewGridCard);
  }
});

export default IconViewGridCard;