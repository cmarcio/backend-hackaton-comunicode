const request = require('request');

module.exports = {

    friendlyName: 'Payment',
  
  
    description: 'Make a payment',

    inputs: {
        
        value: {
            type: 'number',
            required: true
        },

        identity: {
            type: 'string',
            required: true
        },

        cardHolder: {
            type: 'string',
            required: true
        },

        cardNumber: {
            type: 'number',
            required: true
        },

        cardMonth: {
            type: 'number',
            required: true
        },

        cardYear: {
            type: 'number',
            required: true
        },

        cardSecurityCode: {
            type: 'number',
            required: true
        },

        cardType: {
            type: 'string',
            required: true
        }
    },

    exits: {

        paymentError: {
            statusCode: 400,
            description: 'Error processing the purchase.',
        }
    },
  
    fn: async function (inputs, exits) {

        const user = this.req.me;
    
        const options = {
            method: 'POST',
            url: 'https://www.gmxcheckout.com.br/txn/post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            form: {
                restApi: 'true',
                'venda.modalidadeVenda': '1',
                'empresa.hashEmpresa': 'gmxCheckoutGtwy',
                'venda.descricaoFatura': 'Doação',
                'venda.idVendaEmpresa': 'test',
                'venda.consumidor.nome': this.req.me.fullName,
                'venda.consumidor.email': this.req.me.emailAddress,
                'venda.valor': inputs.value,
                'venda.parcelas': '1',
                'cartaoCredito.portador': 'Test venda',
                'venda.consumidor.cpf': inputs.identity,
                'cartaoCredito.numero': inputs.cardNumber,
                'cartaoCredito.mesValidade': inputs.cardMonth,
                'cartaoCredito.anoValidade': inputs.cardYear,
                'cartaoCredito.codSeguranca': inputs.cardSecurityCode,
                'cartaoCredito.bandeira': inputs.cardType,
                'venda.produto': 'Doação' 
            }
        };

        request(options, async function (error, response, body) {
            if (error) return this.res.sendStatus(400);

            const transaction = JSON.parse(body.split('";')[0].substring(1).replace(/\\/g, ''));
            if (transaction.status && transaction.status === 'success') {
                const donation = await Donation.create({
                    value: inputs.value,
                    recurrent: false,
                    paymentId: transaction['venda.idVenda'].value,
                    donator: user.id,
                    status: 'done'
                }).fetch();
                return exits.success(donation);

            } else {
                return exits.paymentError();
            }
        });

        
    }
  
  
};
