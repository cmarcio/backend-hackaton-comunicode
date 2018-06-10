module.exports = {

    friendlyName: 'Get goals',
  
  
    description: 'Return all the goals',
  
    fn: async function (inputs, exits) {

        const goals = await Goal.find({}).sort('createdAt DESC');

        exits.success(goals);
        
    }
  
  
};
