const Collaborator = require('../models/Collaborator')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('../helpers/jwt')

const register_collaborator_admin = async function( request, response) {
    let data = request.body
    try {

        const collaborators = await Collaborator.find({ email: data.email})

        bcrypt.hash(`123?34&/0${data.email}`, null, null, async function(err, hash){
            if (err){
                response.status(200).send({data: undefined, message: 'It was not possible to generate the password for registration'})
            }else {
                if ( collaborators.length > 0 ){
                    response.status(200).send({data: undefined, message: `This e-mail is already in our records`})
                }else {
                    data.fullName = `${data.name} ${data.surnames}`
                    data.password = hash
                    let collaborator = await Collaborator.create(data);
                    response.status(200).send({data: collaborator})
                }
            }
        })

    }catch (error){
        response.status(200).send({data: undefined, message: 'Please, verify fields required'})
    }
}

const login_admin = async function(request, response){
    const data = request.body;

    const collaborators = await Collaborator.find({ email: data.email})

    if (collaborators.length >= 1){
        if(collaborators[0].condition){
            bcrypt.compare( data.password, collaborators[0].password, async function ( error, check){
                if ( check){
                    response.status(200).send({ data: collaborators[0], token: jwt.createToken(collaborators[0])})
                }else{
                    response.status(200).send({data: undefined, message: 'The password is incorrect'})
                }
            })
        }else{
            response.status(200).send({data: undefined, message: 'Access denied to the panel. This user is disabled'})
        }
    }else{
        response.status(200).send({data: undefined, message: `The e-mail: ${data.email} does not exist in our records`})
    }
}

module.exports = {
    register_collaborator_admin,
    login_admin
}