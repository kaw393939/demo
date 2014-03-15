
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("will list users");
};

exports.findone = function(req, res){
   console.log(req);
   var uid = req.params.uid;
   res.send(uid);
};



