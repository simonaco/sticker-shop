module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "loaderio-1d2d8e4a50431b29a6bc8b0b78b40c78"
    };
}