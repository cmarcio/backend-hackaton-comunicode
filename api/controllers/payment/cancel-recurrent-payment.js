const request = require('request');

module.exports = {

    friendlyName: 'Cancel Recurrent Payment',
  
  
    description: 'Cancel a recurrent payment',

    inputs: {
        
        id: {
            type: 'string',
            required: true
        }
    },

    exits: {

        paymentError: {
            statusCode: 400,
            description: 'Error canceling the purchase.',
        },

        invalidId: {
            responseType: 'badRequest',
            description: 'This donation cannot be canceled.',
        }
    },
  
    fn: async function (inputs, exits) {

        const user = this.req.me;

        const donation = await Donation.findOne({ id: inputs.id });

        if (donation.donator !== user.id && donation.status !== 'active' && !donation.recurrent) {
            return exits.invalidId();
        }
        
        const options = {
            method: 'POST',
            url: 'https://www.gmxcheckout.com.br/txn/cancelaRecorrencia',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            form: {
                'hashEmpresa': 'gmxCheckoutGtwy',
                'recorrencia.idRecorrencia': donation.paymentId
            }
        };

        request(options, async function (error, response, body) {
            if (error) return exits.paymentError();

            const transaction = JSON.parse(body.split('";')[0].substring(1).replace(/\\/g, ''));
            if (transaction.status && transaction.status === 'success') {
                const donation = await Donation.update({
                    id: inputs.id
                }, {
                    status: 'canceled'
                }).fetch();
                return exits.success(donation);

            } else {
                return exits.paymentError();
            }
        });
        
    }
  
  
};
