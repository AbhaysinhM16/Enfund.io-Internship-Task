exports.handler = async (event) => {
   
    const a = parseFloat(event.a);
    const b = parseFloat(event.b);

    if (isNaN(a) || isNaN(b)) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Both 'a' and 'b' should be valid numbers."
            })
        };
    }

    const result = a + b;

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `The sum of ${a} and ${b} is ${result}`,
            result: result
        })
    };
};
