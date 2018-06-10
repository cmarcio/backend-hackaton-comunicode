const request = require('request');

module.exports = {

    friendlyName: 'Make payment',
  
  
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
                'recorrencia.modalidadeVenda': '1',
                'empresa.hashEmpresa': 'gmxCheckoutGtwy',
                'recorrencia.descricaoFatura': 'Doação',
                'recorrencia.idrecorrenciaEmpresa': 'test',
                'recorrencia.consumidor.nome': this.req.me.fullName,
                'recorrencia.consumidor.email': this.req.me.emailAddress,
                'recorrencia.valor': inputs.value,
                'recorrencia.parcelas': '1',
                'cartaoCredito.portador': 'Test recorrencia',
                'recorrencia.consumidor.cpf': inputs.identity,
                'cartaoCredito.numero': inputs.cardNumber,
                'cartaoCredito.mesValidade': inputs.cardMonth,
                'cartaoCredito.anoValidade': inputs.cardYear,
                'cartaoCredito.codSeguranca': inputs.cardSecurityCode,
                'cartaoCredito.bandeira': inputs.cardType,
                'recorrencia.produto': 'Doação' 
            }
        };

        request(options, async function (error, response, body) {
            if (error) return this.res.sendStatus(400);

            const transaction = JSON.parse(body.split('";')[0].substring(1).replace(/\\/g, ''));
            
            if (transaction.status && transaction.status === 'success') {
                const donation = await Donation.create({
                    value: inputs.value,
                    recurrent: true,
                    paymentId: transaction['venda.idVenda'].value,
                    donator: user.id
                }).fetch();
                return exits.success(donation);

            } else {
                return exits.paymentError();
            }
        });

        
    }
  
  
};
