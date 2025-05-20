import { useFetch } from "../hooks/useFetch";

export function useLogin(email, password) {
    const url = `http://localhost:5000/auth/login?email=${email}&password=${password}`;
    const { data, error, isPending } = useFetch(url, { method: "GET" }, true);
    return { data, error, isPending };
}