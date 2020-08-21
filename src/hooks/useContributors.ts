import { useEffect, useState } from "react";
import axios from "axios";
import { IContributor } from "../interfaces";

const useContributors = () => {
    const [contributors, setContributors] = useState<IContributor[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getContributors = async (): Promise<void> => {
            try {
                const res = await axios.get("https://api.github.com/repos/kieranmv95/Front-End-Wizard/contributors");
                setContributors(res.data);
                setLoading(false);
            } catch (e) {
                setLoading(false);
                setError("Error loading contributors");
            }
        };

        getContributors();
    }, []);

    return [contributors, error, loading] as const;
};

export default useContributors;
