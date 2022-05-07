var express = require('express');
var router = express.Router();
var connection  = require('../connections/connection');
// var connection  = require('../connections/database');
 

router.get('/', function(req, res, next) {
      
 connection.query(" SELECT departement.NomDept,filieredestination.Intitule,filieredestination.capaciteMax,staff.NomComplet,staff.email FROM filieredestination INNER JOIN staff ON filieredestination.coordonnateur=staff.id INNER JOIN departement ON filieredestination.Id_Departement=departement.id",function(err,rows)     {
 
        if(err){
         req.flash('error', err); 
          
        }else{
            
            res.send({data:rows});
        }
                            
         });
        
    });
 
 
module.exports = router;