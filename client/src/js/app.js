const angular = require('angular')

const ngAnimate = require('angular-animate')
const toastr = require('angular-toastr')
const sweetAlert = require('angular-sweetalert')

const routesModule = require('./routes')
const servicesModule = require('./services')

const runAtBegin = require('./run')

angular.module('pizzaApp', [
    routesModule,
    servicesModule,
    ngAnimate,
    toastr,
    'oitozero.ngSweetAlert'
  ])
  .run( runAtBegin )

