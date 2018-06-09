module.exports = {

    friendlyName: 'Get Profile',
  
  
    description: 'Return the profile of the logged user.',
  
    extendedDescription:
    `This action get the current logged user information and send it back`,
  
  
    fn: async function (inputs, exits) {
      return exits.success(this.req.me);
    }
  
  
  };
  