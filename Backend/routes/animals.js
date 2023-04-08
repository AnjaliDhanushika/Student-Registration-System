const express = require ('express');
const Animals = require('../models/Animals');

const router = express.Router();

//save Animals

router.post('/animal/save', (req,res)=>{

    let newanimal = new Animals(req.body);

    newanimal.save((errA)=>{
        if(errA){
            return res.status(400).json({
                error:errA
            });    
        }
        return res.status(200).json({
            success:"Animals Details Saved Successfully"
        });
    });
});

//get Animals
router.get('/animal' , (req,res)=>{
    Animals.find().exec((err,Animals)=>{
        if(err){
        return res.status(400).json({
            error:err
        });
      }
        
      return res.status(200).json({
          success:true,
          existingAnimals:Animals
      });

    });
});

// get a specific Animals
 router.get("/animal/:id", (req,res) =>{
     let AnimalId = req.params.id;

     Animals.findById(AnimalId,(err,Animals)=>{
         if(err){
             return res.status(400).json({success:false , err});
         }

         return res.status(200).json({
             success:true,
             Animals
         });
     });
 } );


//update Animals

router.put('/animal/update/:id' , (req,res)=>{
    Animals.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,animal)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated SuccesFully"
            });
        }
    );
});


//delete Animals
router.delete('/animal/delete/:id',(req,res)=>{
    Animals.findByIdAndRemove(req.params.id).exec((err,deletedAnimals)=>{
        if(err)return res.status(400).json({
            message:"Delete unSuccessfull",err
        });

        return res.json({
            message:"Delete SuccesFulll" ,deletedAnimals
        });
    });
});

module.exports = router;