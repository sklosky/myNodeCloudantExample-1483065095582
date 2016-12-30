
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'S3 Navigator' });
};