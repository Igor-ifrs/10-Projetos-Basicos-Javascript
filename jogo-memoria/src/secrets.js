const secrets = function (rept = 0) {
    const getRnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const secretsArray = [];
    for (let i = 0; i < rept; i++) {
        const getSecret = `${getRnd(1000, 9999)}`;
        secretsArray.push(getSecret);
    }
    return secretsArray;
};
export default secrets;
