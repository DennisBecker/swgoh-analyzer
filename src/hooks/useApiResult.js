import { useEffect, useState } from "react";

const useApiResult = (request) => {
    const [results, setResults] = useState(null);

    useEffect(() => {
        fetch(request[0], request[1])
            .then(async (response) => {
                if (response.ok) {
                    setResults(await response.json());
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [request]);

    return results;
};

export default useApiResult;