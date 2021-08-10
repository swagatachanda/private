const express = require("express")
const raisa = require("../model/raisamessage")
const router = express.Router()

router.use(express.json())

// router.post("/",async(req,res)=>{
//     console.log(req.body)
//     const messages=new raisa({
//         msg : req.body.msg,
//         number : req.body.number
//     })
//     try{
//         const newraisa=await messages.save()
//         res.json(newraisa)
//     }
//     catch(err){
//         res.json(err) 
//     }
// })


router.get("/:num", async(req,res)=>{
    try {
		const hbd = await raisa.findOne({"number":req.params.num})
		if (hbd == null) {
			return res.status(404).json({
				errorMessage: "Message not found",
			})
		}
		return res.status(200).json({
			data: hbd
		})
	} catch (err) {
		res.status(501).json({
			errorMessage: "database problem",
		})
	}
})

module.exports = router