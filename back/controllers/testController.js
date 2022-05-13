const testProof = async function(require, response){
    response.status(200).send({
        message: 'Hello, I am a test from testProof controller'
    })
}

module.exports = {
    testProof
}