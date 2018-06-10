/**
 * Donation.js
 *
 */

module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
      
      totalValue: {
        type: 'number'
      },

      reachedValue: {
        type: 'number',
        defaultsTo: 0
      },

      title: {
        type: 'string'
      },

      description: {
        type: 'string'
      },

      deadline: {
        type: 'number'
      },

      status: {
        type: 'string',
        isIn: ['done', 'active'],
        defaultsTo: 'active'
      },
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

      donations: {
        collection: 'donation',
        via: 'goal'
      }
    },
  
  };
  