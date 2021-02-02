import EmberRouter from '@ember/routing/router';
import config from 'chat/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index');
  this.route('chatuser');
  this.route('contacts');
  this.route('about');
});
