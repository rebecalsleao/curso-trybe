const fetch = require("node-fetch");

const fetchInspiration = async () => {
    const url = "https://api.goprogram.ai/inspiration";

    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(`"${data.quote}" | ${data.author}`));

    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(`"${data.quote}" | ${data.author}`);

    console.log(url);
};

fetchInspiration();
