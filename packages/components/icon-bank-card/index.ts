import type { App } from 'vue';
import _IconBankCard from './icon-bank-card.vue';

const IconBankCard = Object.assign(_IconBankCard, {
  install: (app: App) => {
    app.component(_IconBankCard.name, _IconBankCard);
  }
});

export default IconBankCard;