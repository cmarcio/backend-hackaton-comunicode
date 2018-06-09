module.exports = function notFound() {

    var req = this.req;
    var res = this.res;
  
    sails.log.verbose('Ran custom response: res.notFound()');
    
    return res.sendStatus(404);
  
};
