/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝

  'GET /email/confirm':      { action: 'entrance/confirm-email' },

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝

  // ACCOUNT
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'GET   /api/v1/account/get-profile':                { action: 'account/get-profile' },

  // ENTRANCE
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },

  // PAYMENT
  'PUT   /api/v1/payment/recurrent-payment':             { action: 'payment/recurrent-payment' },
  'PUT   /api/v1/payment/cancel-recurrent-payment':      { action: 'payment/cancel-recurrent-payment' },
  'PUT   /api/v1/payment/payment':                       { action: 'payment/payment' },
  'GET   /api/v1/payment/my-payments':                   { action: 'payment/my-payments' },
  'GET   /api/v1/payment/profit':                   { action: 'payment/profit' },
  
  // GOALS
  'POST  /api/v1/goal/new-goal':                   { action: 'goal/new-goal' },
  'PUT   /api/v1/goal/update-goal':                { action: 'goal/update-goal' },
  'PUT   /api/v1/goal/close-goal':                 { action: 'goal/close-goal' },
  'GET   /api/v1/goal/get-goals':                  { action: 'goal/get-goals' },
  'GET   /api/v1/goal/get-goal':                   { action: 'goal/get-goal' },
  
};
