<!-- resources/views/FormLogin.blade.php -->
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login Page</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="max-h-screen">
    <section class="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
        <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl">
            <div class="w-5/6 md:block hidden">
                <img src="https://p1.liveauctioneers.com/dist/images/SignupLadySmall.png" class="rounded-l-lg" alt="page img">
            </div>

            <div class="w-screen p-5 px-10">
                <h2 class="text-xl flex flex-col items-center font-bold text-[#002D74]">Welcome to AuctionEase!</h2>
                <form class="mt-6" action="{{ route('login') }}" method="POST">
                    @csrf
                    <div>
                        <label class="block text-gray-700">EMAIL ADDRESS / USERNAME</label>
                        <input type="email" name="email" id="email" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                        @error('email')
                            <span class="text-red-500 text-sm">{{ $message }}</span>
                        @enderror
                    </div>

                    <div class="mt-4">
                        <label class="block text-gray-700">PASSWORD</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none">
                        @error('password')
                            <span class="text-red-500 text-sm">{{ $message }}</span>
                        @enderror
                    </div>

                    <button type="submit" class="w-full block bg-red-600 hover:bg-red-900 focus:bg-red-900 text-white font-semibold rounded-lg px-4 py-3 mt-6">LOG IN</button>
                </form>

                <div class="text-sm flex flex-col items-center mt-3 space-y-4">
                    <a href="#" class="text-sm font-semibold text-blue-700"><u>Forgot Password?</u></a>
                    <p class="text-center">Don't have an account?
                        <a href="#" class="text-sm font-semibold text-blue-700"><u>Join</u></a>
                    </p>
                </div>
            </div>
        </div>
    </section>
</body>

</html>
