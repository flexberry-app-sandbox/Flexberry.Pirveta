import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-pirveta-докум-постав-l');
  this.route('i-i-s-pirveta-докум-постав-e',
  { path: 'i-i-s-pirveta-докум-постав-e/:id' });
  this.route('i-i-s-pirveta-докум-постав-e.new',
  { path: 'i-i-s-pirveta-докум-постав-e/new' });
  this.route('i-i-s-pirveta-клиенты-l');
  this.route('i-i-s-pirveta-клиенты-e',
  { path: 'i-i-s-pirveta-клиенты-e/:id' });
  this.route('i-i-s-pirveta-клиенты-e.new',
  { path: 'i-i-s-pirveta-клиенты-e/new' });
  this.route('i-i-s-pirveta-организация-l');
  this.route('i-i-s-pirveta-организация-e',
  { path: 'i-i-s-pirveta-организация-e/:id' });
  this.route('i-i-s-pirveta-организация-e.new',
  { path: 'i-i-s-pirveta-организация-e/new' });
  this.route('i-i-s-pirveta-пункт-погрузки-l');
  this.route('i-i-s-pirveta-пункт-погрузки-e',
  { path: 'i-i-s-pirveta-пункт-погрузки-e/:id' });
  this.route('i-i-s-pirveta-пункт-погрузки-e.new',
  { path: 'i-i-s-pirveta-пункт-погрузки-e/new' });
  this.route('i-i-s-pirveta-список-барж-l');
  this.route('i-i-s-pirveta-список-барж-e',
  { path: 'i-i-s-pirveta-список-барж-e/:id' });
  this.route('i-i-s-pirveta-список-барж-e.new',
  { path: 'i-i-s-pirveta-список-барж-e/new' });
  this.route('i-i-s-pirveta-список-контей-l');
  this.route('i-i-s-pirveta-список-контей-e',
  { path: 'i-i-s-pirveta-список-контей-e/:id' });
  this.route('i-i-s-pirveta-список-контей-e.new',
  { path: 'i-i-s-pirveta-список-контей-e/new' });
  this.route('i-i-s-pirveta-товары-l');
  this.route('i-i-s-pirveta-товары-e',
  { path: 'i-i-s-pirveta-товары-e/:id' });
  this.route('i-i-s-pirveta-товары-e.new',
  { path: 'i-i-s-pirveta-товары-e/new' });
  this.route('i-i-s-pirveta-формир-распред-l');
  this.route('i-i-s-pirveta-формир-распред-e',
  { path: 'i-i-s-pirveta-формир-распред-e/:id' });
  this.route('i-i-s-pirveta-формир-распред-e.new',
  { path: 'i-i-s-pirveta-формир-распред-e/new' });
  this.route('i-i-s-pirveta-формир-рез-пос-l');
  this.route('i-i-s-pirveta-формир-рез-пос-e',
  { path: 'i-i-s-pirveta-формир-рез-пос-e/:id' });
  this.route('i-i-s-pirveta-формир-рез-пос-e.new',
  { path: 'i-i-s-pirveta-формир-рез-пос-e/new' });
});

export default Router;
