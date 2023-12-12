import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокРаспр: DS.attr('number'),
  докумПостав: DS.belongsTo('i-i-s-pirveta-докум-постав', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-pirveta-пункт-погрузки', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-pirveta-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-pirveta-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-pirveta-формир-распред.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокРаспр: {
    descriptionKey: 'models.i-i-s-pirveta-формир-распред.validations.номерДокРаспр.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-pirveta-формир-распред.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-pirveta-формир-распред.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-pirveta-формир-распред.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-pirveta-формир-распред.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспредE', 'i-i-s-pirveta-формир-распред', {
    номерДокРаспр: attr('Номер док распр', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    списокКонтей: belongsTo('i-i-s-pirveta-список-контей', 'Список контей', {
      наимКонт: attr('Наим конт', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наимКонт' }),
    докумПостав: belongsTo('i-i-s-pirveta-докум-постав', 'Докум постав', {
      номерДог: attr('Номер дог', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'номерДог' }),
    списокБарж: belongsTo('i-i-s-pirveta-список-барж', 'Список барж', {
      производитель: attr('Производитель', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'производитель' }),
    пунктПогрузки: belongsTo('i-i-s-pirveta-пункт-погрузки', 'Пункт погрузки', {
      наименование: attr('Наименование', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ФормирРаспредL', 'i-i-s-pirveta-формир-распред', {
    номерДокРаспр: attr('Номер док распр', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    списокКонтей: belongsTo('i-i-s-pirveta-список-контей', 'Наим конт', {
      наимКонт: attr('Наим конт', { index: 2 })
    }, { index: -1, hidden: true }),
    докумПостав: belongsTo('i-i-s-pirveta-докум-постав', 'Номер дог', {
      номерДог: attr('Номер дог', { index: 3 })
    }, { index: -1, hidden: true }),
    списокБарж: belongsTo('i-i-s-pirveta-список-барж', 'Производитель', {
      производитель: attr('Производитель', { index: 4 })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-pirveta-пункт-погрузки', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
