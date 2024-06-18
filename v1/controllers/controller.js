const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


process.on('uncaughtException', (err)=>{
    console.log(`uncaught exception: ${err}`);
    process.exit(1)
})


//get all actors from database
const getAllActors = async(req,res)=>{
    try {
        const allActors = await prisma.actor.findMany()
        res.json({status: 'ok',data :{allActors}})
    } catch (error) {
        error.throw
    }
}


//post actors to database
const postActors = async(req,res)=>{
    try {
         const {body:{name,email,role,birth_date,city}} = req
         const postActors = await prisma.actor.create({data: {name,email,role,birth_date,city}})
         res.json({status: 'ok',data :{postActors}})

    } catch (error) {
        error.throw
    }
}



//put actors
const putActors = async(req,res)=>{
    try {
         const id = req.params.id
         const {name,email,role,birth_date,city} = req.body
         const putActor = await prisma.actor.update({
            where: {id : parseInt(id)},
            data : {name:name, email:email, role:role, birth_date:birth_date, city: city},
         })
         res.json({status: 'ok',data :{putActor}})

    } catch (error) {
        error.throw
    }
}



//delete actor
const deletActor = async(req,res)=>{
    try {
         const id = req.params.id
        
         await prisma.actor.delete({
            where: {id : parseInt(id)},
         })
         res.json({message: "deleted successfully"})

    } catch (error) {
        error.throw
    }
}


module.exports = {getAllActors, postActors, putActors, deletActor}

