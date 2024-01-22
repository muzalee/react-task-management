import { useEffect } from "react";
import GuestLayout from "../layouts/GuestLayout";
import { useNavigate } from "react-router-dom";

function Home() {
    useEffect(() => {
        document.title = "React Task Management"
    }, []);

    let navigate = useNavigate();
    
    const handleGetStarted = () => {
        navigate('/login');
    }

    return (
        <GuestLayout>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 divide-y divide-gray-200 dark:divide-gray-700 sm:mt-24 sm:divide-y-0 px-8">
                <div className="flex flex-col items-center sm:items-end justify-center pb-8 pt-6 sm:border-r-2 px-2 text-center sm:text-end">
                    <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl sm:px-6">
                        Hey there!
                    </h1>
                    <p className="tracking-tight text-primary max-w-xs sm:px-6">
                        This is a task management portal created with reactJS
                    </p>
                </div>
                <div className="flex flex-col items-start justify-center">
                    <button onClick={ handleGetStarted } className="mt-12 sm:mt-0 bg-transparent hover:bg-secondary text-secondary font-semibold hover:text-white py-2 px-3 border border-secondary hover:border-transparent rounded w-full text-sm sm:w-auto">
                        Get Started
                    </button>
                </div>
            </div>
        </GuestLayout>
    );
}

export default Home;
