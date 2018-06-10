const moment = require('moment');

module.exports = {

    friendlyName: 'Profit',
  
    description: 'Get the profil for the current month',

    fn: async function (inputs, exits) {
        const beggining = moment().startOf('month');
        const ending = moment().endOf('month');

        // recupera a soma todas as doações feitas no mês
        const donations = await Donation.find({
            or: [
                { status: 'done', createdAt: { '>': beggining.valueOf(), '<': ending.valueOf() } },
                { status: 'active' }
            ]
        });
        const donationAmount = donations.reduce((accumulator, current) => current.value + accumulator, 0);

        exits.success({donationAmount});
        
    }
  
  
};
