import LoginIllustration from "../components/svg/Login";

function LoginPage() {
    return (
        <div className="flex min-h-screen">
            {/* Left Side - Login Form */}
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8">
                <h1 className="text-3xl font-bold mb-6">Login</h1>
                <form className="w-full max-w-sm">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>

            {/* Right Side - Illustration */}
            <div className="w-full md:w-1/2 bg-blue-500 flex justify-center items-center p-8 px-28">
                <LoginIllustration />
            </div>
        </div>
    );
}

export default LoginPage;
