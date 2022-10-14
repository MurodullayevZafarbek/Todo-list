const { Router } = require('express');
const router = Router();

/*Error*/
router.get('/',(req,res,next)=>{
    res.json({message:"Page not found"}).status(400)
})

module.exports = router;