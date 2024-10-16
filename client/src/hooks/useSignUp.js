import { useState } from "react";
import { useAuthcontext } from "../context/AutContext";
import toast from "react-hot-toast";
import { apiUrl } from "../common/SummaryApi";

const handleInputErrors = ({ username, email, password, confirmPassword, gender }) => {
    if (!username || !email || !password || !confirmPassword || !gender) {
        toast.error("Please fill all the fields");
        return true;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return true;
    }
    return false;
};

const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthcontext();

    const signup = async ({ username, email, password, confirmPassword, gender }) => {
        const checkError = handleInputErrors({
            username,
            email,
            password,
            confirmPassword,
            gender,
        });
        if (checkError) {
            return;
        }

        try {
            setLoading(true);
            const res = await fetch(`${apiUrl}/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    confirmPassword,
                    gender,
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Failed to sign up");
            }

            // Check if data.user is defined and log it
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                console.log("User Data Stored:", data.user);
                setAuthUser(data.user);
                toast.success("Signup successful");
            } else {
                console.error("User data not found in response:", data);
            }
        } catch (error) {
            console.error("Signup error:", error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading };
};

export default useSignUp;
