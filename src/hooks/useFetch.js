import { useState } from "react";
import useAuth from "./useAuth";

const useFetch = () => {
    const { token, isAuthenticated } = useAuth();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    const headers = {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
    };

    const handleRequest = async (url, options = {}) => {
        setIsLoading(true);
        setError(null);

        if (options.method && options.method.toLowerCase() !== "get" && !isAuthenticated) {
            setError("User is not authenticated");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(url, { headers, ...options });
            if (!response.ok) {
                throw new Error(`Failed to ${options.method || "fetch"} resource`);
            }
            const result = await response.json();
            setData(result);
            return result;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };

    const get = {
        activities: () => handleRequest(`http://localhost:3042/activities`),
        activity: (id) => id ? handleRequest(`http://localhost:3042/activities/${id}`) : setError("No id provided"),
        reviews: () => handleRequest(`http://localhost:3042/reviews`),
        review: (id) => id ? handleRequest(`http://localhost:3042/reviews/${id}`) : setError("No id provided"),
        stays: () => handleRequest(`http://localhost:3042/stays`),
        stay: (id) => id ? handleRequest(`http://localhost:3042/stays/${id}`) : setError("No id provided"),
        users: () => handleRequest(`http://localhost:3042/users`),
        user: (id) => id ? handleRequest(`http://localhost:3042/users/${id}`) : setError("No id provided"),
    };

    const post = {
        activities: (activity) => handleRequest(`http://localhost:3042/activities`, { method: "POST", body: JSON.stringify(activity) }),
        reviews: (review) => handleRequest(`http://localhost:3042/reviews`, { method: "POST", body: JSON.stringify(review) }),
        stays: (stay) => handleRequest(`http://localhost:3042/stays`, { method: "POST", body: JSON.stringify(stay) }),
        users: (user) => handleRequest(`http://localhost:3042/users`, { method: "POST", body: JSON.stringify(user) }),
    };

    const put = {
        activities: (id, activity) => id ? handleRequest(`http://localhost:3042/activities/`, { method: "PUT", body: JSON.stringify({ id, ...activity }) }) : setError("No id provided"),
        reviews: (id, review) => id ? handleRequest(`http://localhost:3042/reviews/`, { method: "PUT", body: JSON.stringify({ id, ...review }) }) : setError("No id provided"),
        stays: (id, stay) => id ? handleRequest(`http://localhost:3042/stays/`, { method: "PUT", body: JSON.stringify({ id, ...stay }) }) : setError("No id provided"),
        users: (id, user) => id ? handleRequest(`http://localhost:3042/users/`, { method: "PUT", body: JSON.stringify({ id, ...user }) }) : setError("No id provided"),
    };

    const del = {
        activities: (id) => id ? handleRequest(`http://localhost:3042/activities/${id}`, { method: "DELETE" }) : setError("No id provided"),
        reviews: (id) => id ? handleRequest(`http://localhost:3042/reviews/${id}`, { method: "DELETE" }) : setError("No id provided"),
        stays: (id) => id ? handleRequest(`http://localhost:3042/stays/${id}`, { method: "DELETE" }) : setError("No id provided"),
        users: (id) => id ? handleRequest(`http://localhost:3042/users/${id}`, { method: "DELETE" }) : setError("No id provided"),
    };

    return {
        get,
        post,
        put,
        del,
        data,
        error,
        isLoading,
    };
};

export default useFetch;