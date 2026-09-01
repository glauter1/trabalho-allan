
export default function(req,res,next){
 const {idade} = req.body;
 if(typeof idade !== 'number' || idade < 0 || idade > 120){
   return res.status(400).json({erro:'A idade deve estar entre 0 e 120 anos.'});
 }
 next();
}
