import React from "react";
import Image from "./image";
import staringCat from "./staringCat.jpg";

function App() {
    return (
        <div className="App">
            <main>
                <Image source={staringCat} alternativeText="Cute cat staring" />
            </main>
        </div>
    );
}

export default App;
