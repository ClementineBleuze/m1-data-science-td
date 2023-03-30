use tourPedia

db.paris.find({category: "accommodation", services: "blanchisserie"})

db.paris.find({category: "accommodation"}, {"location.address": 1})

db.paris.find({
    "reviews":{
        $elemMatch:{
            "language":"en",
            "rating":{$gt:3}
        }
    }
    })
   
db.paris.aggregate([{
    $group:{
        "_id":"$category",
        "total":{$sum:1}
    }
}])

db.paris.aggregate([
        {$match:
            {category: "accommodation"}
        },
        {$unwind:"$services"}, //"unpacking" multiple values in the service list 
        {$group:{
            "_id":"$services",
            "total":{$sum:1}            }        }      ])


