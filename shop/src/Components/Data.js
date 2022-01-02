import GET_DATA from "./GraphQl/Query";
import {useQuery } from '@apollo/client';
import Navbar from "./Navbar/Navbar";

function Data() {
    const { loading, data} = useQuery(GET_DATA)

    if(loading)
        return <p>Loading..</p>

    return <Navbar data={data} />
}

export default Data;