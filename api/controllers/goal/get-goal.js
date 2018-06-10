module.exports = {

    friendlyName: 'Get goal',
  
  
    description: 'Return the currently active goal',

    exits: {

        goalNotFound: {
            responseType: 'notFound',
            description: 'Nenhuma meta ativa encontrada.'
        }
    },
  
    fn: async function (inputs, exits) {

        const goal = await Goal.findOne({ status: 'active' });
        if (!goal) return exits.goalNotFound();

        exits.success(goal);
        
    }
  
  
};
