module.exports = {

    friendlyName: 'My Payments',
  
  
    description: 'Return the user payments',
  
    fn: async function (inputs, exits) {

        const donations = await Donation.find({ donator: this.req.me.id });

        exits.success(donations);
        
    }
  
  
};
