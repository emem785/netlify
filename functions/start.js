exports.handler = async event => {
    const subject = event.queryStringParameters.name || "dfjdfkdfd"
    return {
        statusCode: 200,
        body :`Hello ${subject}!`, 
    }
}