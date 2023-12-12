import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  количество: DS.attr('number'),
  товары: DS.belongsTo('i-i-s-pirveta-товары', { inverse: null, async: false }),
  докумПостав: DS.belongsTo('i-i-s-pirveta-докум-постав', { inverse: 'тЧИнфОЗак', async: false })
});

export let ValidationRules = {
  количество: {
    descriptionKey: 'models.i-i-s-pirveta-т-ч-инф-о-зак.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  товары: {
    descriptionKey: 'models.i-i-s-pirveta-т-ч-инф-о-зак.validations.товары.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-pirveta-т-ч-инф-о-зак.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧИнфОЗакE', 'i-i-s-pirveta-т-ч-инф-о-зак', {
    товары: belongsTo('i-i-s-pirveta-товары', 'Товары', {
      наимТовара: attr('Наим товара', { index: 1, hidden: true }),
      едИзм: attr('', { index: 3 }),
      масса: attr('', { index: 4 }),
      цена: attr('', { index: 5 })
    }, { index: 0, displayMemberPath: 'наимТовара' }),
    количество: attr('Количество', { index: 2 })
  });
};
