import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  едИзм: DS.attr('i-i-s-pirveta-ед-изм'),
  масса: DS.attr('decimal'),
  наимТовара: DS.attr('string'),
  произ: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  едИзм: {
    descriptionKey: 'models.i-i-s-pirveta-товары.validations.едИзм.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  масса: {
    descriptionKey: 'models.i-i-s-pirveta-товары.validations.масса.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наимТовара: {
    descriptionKey: 'models.i-i-s-pirveta-товары.validations.наимТовара.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  произ: {
    descriptionKey: 'models.i-i-s-pirveta-товары.validations.произ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-pirveta-товары.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-pirveta-товары', {
    цена: attr('Цена', { index: 0 }),
    наимТовара: attr('Наим товара', { index: 1 }),
    едИзм: attr('Ед изм', { index: 2 }),
    масса: attr('Масса', { index: 3 }),
    произ: attr('Произ', { index: 4 })
  });

  modelClass.defineProjection('ТоварыL', 'i-i-s-pirveta-товары', {
    цена: attr('Цена', { index: 0 }),
    наимТовара: attr('Наим товара', { index: 1 }),
    едИзм: attr('Ед изм', { index: 2 }),
    масса: attr('Масса', { index: 3 }),
    произ: attr('Произ', { index: 4 })
  });
};
