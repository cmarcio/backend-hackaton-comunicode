module.exports = {

    friendlyName: 'Close Goal',
  
  
    description: 'Close the currently active goal',

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
        const updatedGoal = await Goal.update({ id: goal.id },{ status: 'done' }).fetch();

        exits.success(updatedGoal[0]);
        
    }
  
  
};
