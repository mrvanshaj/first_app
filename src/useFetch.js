import { useState, useEffect } from "react";

const useFetch = (url) => {
    // const [name, setName] = useState("mario");
    // const [age, setAge] = useState(25);
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("COULD NOT REACH THE RESOURCE");
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url])

    return { data, isPending, error }
}
export default useFetch;


// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [isPending, setIsPending] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // setTimeout(() => {
//         fetch(url)
//             .then(res => {
//                 if (!res.ok) { // error coming back from server
//                     throw Error("could not fetch the data for that resource");
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 setIsPending(false);
//                 setData(data);
//                 setError(null);
//             })
//             .catch(err => {
//                 // auto catches network / connection error
//                 setIsPending(false);
//                 setError(err.message);
//             })
//         // }, 1000);
//     }, [url])

//     return { data, isPending, error };
// }

// export default useFetch;
