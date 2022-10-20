const wakeUp = () => "Acordando!!";
const breackfast = () => "Bora tomar café!!";
const sleep = () => "Partiu dormir!!";

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};

doingThings(wakeUp);
doingThings(breackfast);
doingThings(sleep);
