exports.engine = 'hbs';

exports.list = function(req, res, next){
    res.render('list', { pessoas: [1,2,3] });
  };