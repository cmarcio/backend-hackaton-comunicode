module.exports = {

    friendlyName: 'Update Goal',
  
  
    description: 'Update the currently active goal',

    inputs: {
        
        totalValue: {
            type: 'number'
        },

        title: {
            type: 'string'
        },

        description: {
            type: 'string'
        },

        deadline: {
            type: 'number'
        }
    },

    exits: {

        goalNotFound: {
            responseType: 'notFound',
            description: 'Nenhuma meta ativa encontrada.'
        }
    },
  
    fn: async function (inputs, exits) {

        // busca a ultima meta
        const goal = await Goal.findOne({ status: 'active' });
        if (!goal) return exits.goalNotFound();

        // atualiza a meta
        const updatedGoal = await Goal.update({ id: goal.id },{
            totalValue: inputs.totalValue,
            title: inputs.title,
            description: inputs.description,
            deadline: inputs.deadline
        }).fetch();

        exits.success(updatedGoal[0]);
        
    }
  
  
};
