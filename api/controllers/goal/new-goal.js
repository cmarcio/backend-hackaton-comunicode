module.exports = {

    friendlyName: 'New Goal',
  
  
    description: 'Create a new goal',

    inputs: {
        
        totalValue: {
            type: 'number',
            required: true
        },

        title: {
            type: 'string',
            required: true
        },

        description: {
            type: 'string',
            required: true
        },

        deadline: {
            type: 'number',
            required: true
        }
    },

    exits: {

    },
  
    fn: async function (inputs, exits) {

        // busca a ultima meta ativa
        const oldGoal = await Goal.findOne({ status: 'active' });
        
        // finaliza a meta antiga
        if (oldGoal) {
            await Goal.update({ id: oldGoal.id }, { status: 'done' });
        }
        
        // cria a nova meta
        const goal = await Goal.create({
            totalValue: inputs.totalValue,
            title: inputs.title,
            description: inputs.description,
            deadline: inputs.deadline
        }).fetch();


        exits.success(goal);
        
    }
  
  
};
