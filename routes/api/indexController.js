'use strict'
const	express  	=	require('express');
const	router 		= 	express.Router();
const Users    = require('../../models/users');


/**
* Display a listing of the resource
*
* @return array of Object
*/

router.get('/',async (req, res) => {
  try {
    const DataUsers = await Users.find();
    return res.status(200).json({
      success : 'true',
      message :'Data Di Temukan',
      data :DataUsers
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success : 'false',
      message :error
    });
  }
});

/**
* Display the specified resource
*
* @param	String/int 	 id
*
*/

router.get('/:id',async (req, res) => {
  try {
    const DataUsers = await Users.findById({ _id : req.params.id});
    return res.status(200).json({
      success : 'true',
      message :'Data Di Temukan',
      data :DataUsers
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success : 'false',
      message :error
    });
  }
});

/**
* Stored a newly created resource in storage.
*
* @request body of Object type
*/

router.post('/',async (req, res) => {
  
  try {
    const UserSave = new Users({
      username:req.body.username,
      email:req.body.email,
    });
    const SaveUser = await UserSave.save();
    return res.status(201).json({
      success : 'true',
      message :'Success',
      data :SaveUser
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success : 'false',
      message :error
    });
  }
});

/**
* Update the specified resource in storage.
*
* @param  int  id
* @return Response
*/

router.put('/:id',async (req, res) => {
  
  try {
    
    const SaveUser = await Users.updateOne(
      { _id : req.params.id},
      { $set : req.body}
    );
    return res.status(201).json({
      success : 'true',
      message :'Success Updated ' +req.params.id,
      data :SaveUser
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success : 'false',
      message :error
    });
  }
});

/**
* Remove the specified resource from storage.
*
* @param  int  id
*/
router.delete('/:id',async (req, res) => {
  try {
    const UserDelete = await Users.deleteOne({ _id: req.params.id });
    return res.status(201).json({
      success : 'true',
      message :'Sucess',
      data : UserDelete
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success : 'false',
      message :error
    });
  }
});


module.exports	=	router;