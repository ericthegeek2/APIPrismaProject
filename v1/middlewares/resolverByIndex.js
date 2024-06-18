const resolveIndex = (req,res,next)=>{
    const {params:{id}} = req.body
    const paresId =parseInt(id)

    if (isNaN(paresId)){
        return res.sendStatus(400)
    } 
}