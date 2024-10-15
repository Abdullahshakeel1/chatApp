import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthcontext } from "../context/AutContext";

const handleInputErrors = (email, password) => {
    if (!email || !password) {
        toast.error("Please fill all the fields");
        return true;
    }
    return false;
};

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthcontext();

    const login = async (email, password) => {
        const checkError = handleInputErrors(email, password);
        if (checkError) {
            return;
        }

        try {
            setLoading(true);
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Failed to log in");
            }

            // Check if data.user is defined and log it
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                console.log("User Data Stored:", data.user);
                setAuthUser(data.user);
                toast.success("Login successful");
            } else {
                console.error("User data not found in response:", data);
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { login, loading };
};

export default useLogin;
