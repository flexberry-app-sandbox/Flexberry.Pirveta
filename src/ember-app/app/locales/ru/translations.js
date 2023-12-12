import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISPirvetaДокумПоставLForm from './forms/i-i-s-pirveta-докум-постав-l';
import IISPirvetaКлиентыLForm from './forms/i-i-s-pirveta-клиенты-l';
import IISPirvetaОрганизацияLForm from './forms/i-i-s-pirveta-организация-l';
import IISPirvetaПунктПогрузкиLForm from './forms/i-i-s-pirveta-пункт-погрузки-l';
import IISPirvetaСписокБаржLForm from './forms/i-i-s-pirveta-список-барж-l';
import IISPirvetaСписокКонтейLForm from './forms/i-i-s-pirveta-список-контей-l';
import IISPirvetaТоварыLForm from './forms/i-i-s-pirveta-товары-l';
import IISPirvetaФормирРаспредLForm from './forms/i-i-s-pirveta-формир-распред-l';
import IISPirvetaФормирРезПосLForm from './forms/i-i-s-pirveta-формир-рез-пос-l';
import IISPirvetaДокумПоставEForm from './forms/i-i-s-pirveta-докум-постав-e';
import IISPirvetaКлиентыEForm from './forms/i-i-s-pirveta-клиенты-e';
import IISPirvetaОрганизацияEForm from './forms/i-i-s-pirveta-организация-e';
import IISPirvetaПунктПогрузкиEForm from './forms/i-i-s-pirveta-пункт-погрузки-e';
import IISPirvetaСписокБаржEForm from './forms/i-i-s-pirveta-список-барж-e';
import IISPirvetaСписокКонтейEForm from './forms/i-i-s-pirveta-список-контей-e';
import IISPirvetaТоварыEForm from './forms/i-i-s-pirveta-товары-e';
import IISPirvetaФормирРаспредEForm from './forms/i-i-s-pirveta-формир-распред-e';
import IISPirvetaФормирРезПосEForm from './forms/i-i-s-pirveta-формир-рез-пос-e';
import IISPirvetaДокумПоставModel from './models/i-i-s-pirveta-докум-постав';
import IISPirvetaКлиентыModel from './models/i-i-s-pirveta-клиенты';
import IISPirvetaОрганизацияModel from './models/i-i-s-pirveta-организация';
import IISPirvetaПунктПогрузкиModel from './models/i-i-s-pirveta-пункт-погрузки';
import IISPirvetaСписокБаржModel from './models/i-i-s-pirveta-список-барж';
import IISPirvetaСписокКонтейModel from './models/i-i-s-pirveta-список-контей';
import IISPirvetaТЧИнфОЗакModel from './models/i-i-s-pirveta-т-ч-инф-о-зак';
import IISPirvetaТоварыModel from './models/i-i-s-pirveta-товары';
import IISPirvetaФормирРаспредModel from './models/i-i-s-pirveta-формир-распред';
import IISPirvetaФормирРезПосModel from './models/i-i-s-pirveta-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-pirveta-докум-постав': IISPirvetaДокумПоставModel,
    'i-i-s-pirveta-клиенты': IISPirvetaКлиентыModel,
    'i-i-s-pirveta-организация': IISPirvetaОрганизацияModel,
    'i-i-s-pirveta-пункт-погрузки': IISPirvetaПунктПогрузкиModel,
    'i-i-s-pirveta-список-барж': IISPirvetaСписокБаржModel,
    'i-i-s-pirveta-список-контей': IISPirvetaСписокКонтейModel,
    'i-i-s-pirveta-т-ч-инф-о-зак': IISPirvetaТЧИнфОЗакModel,
    'i-i-s-pirveta-товары': IISPirvetaТоварыModel,
    'i-i-s-pirveta-формир-распред': IISPirvetaФормирРаспредModel,
    'i-i-s-pirveta-формир-рез-пос': IISPirvetaФормирРезПосModel
  },

  'application-name': 'Pirveta',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Pirveta',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Pirveta',
          title: 'Pirveta'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        pirveta: {
          caption: 'Pirveta',
          title: 'Pirveta',
          'i-i-s-pirveta-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-pirveta-докум-постав-l': {
            caption: 'Докум постав',
            title: ''
          },
          'i-i-s-pirveta-формир-распред-l': {
            caption: 'Формир распред',
            title: ''
          },
          'i-i-s-pirveta-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-pirveta-формир-рез-пос-l': {
            caption: 'Формир рез пос',
            title: ''
          },
          'i-i-s-pirveta-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-pirveta-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-pirveta-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-pirveta-список-барж-l': {
            caption: 'Список барж',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-pirveta-докум-постав-l': IISPirvetaДокумПоставLForm,
    'i-i-s-pirveta-клиенты-l': IISPirvetaКлиентыLForm,
    'i-i-s-pirveta-организация-l': IISPirvetaОрганизацияLForm,
    'i-i-s-pirveta-пункт-погрузки-l': IISPirvetaПунктПогрузкиLForm,
    'i-i-s-pirveta-список-барж-l': IISPirvetaСписокБаржLForm,
    'i-i-s-pirveta-список-контей-l': IISPirvetaСписокКонтейLForm,
    'i-i-s-pirveta-товары-l': IISPirvetaТоварыLForm,
    'i-i-s-pirveta-формир-распред-l': IISPirvetaФормирРаспредLForm,
    'i-i-s-pirveta-формир-рез-пос-l': IISPirvetaФормирРезПосLForm,
    'i-i-s-pirveta-докум-постав-e': IISPirvetaДокумПоставEForm,
    'i-i-s-pirveta-клиенты-e': IISPirvetaКлиентыEForm,
    'i-i-s-pirveta-организация-e': IISPirvetaОрганизацияEForm,
    'i-i-s-pirveta-пункт-погрузки-e': IISPirvetaПунктПогрузкиEForm,
    'i-i-s-pirveta-список-барж-e': IISPirvetaСписокБаржEForm,
    'i-i-s-pirveta-список-контей-e': IISPirvetaСписокКонтейEForm,
    'i-i-s-pirveta-товары-e': IISPirvetaТоварыEForm,
    'i-i-s-pirveta-формир-распред-e': IISPirvetaФормирРаспредEForm,
    'i-i-s-pirveta-формир-рез-пос-e': IISPirvetaФормирРезПосEForm
  },

});

export default translations;
