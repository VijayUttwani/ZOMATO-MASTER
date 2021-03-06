import React from "react";
import { useParams } from "react-router-dom";

// Components
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";

const Home = () => {
    const { type } = useParams();
    return (
        <div className="my-5">
            {type === "delivery" && <Delivery />}
            {type === "dining" && <Dining />}
            {type === "night" && <NightLife/>}
        </div>
    )
}

export default Home;