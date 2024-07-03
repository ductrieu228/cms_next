import Image from "next/image";

const Home = () => {
  return (
    <main className="overflow-y-scroll h-screen">
      {/* <!----------------- Header -----------------> */}
      <header className="flex items-center justify-between p-4 sticky top-0 bg-white">
        <div className="flex items-center justify-between">
          <a
            href="#sidenav-open"
            className="visible sm:hidden"
            title="Open Menu"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 text-gray-900"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </a>
          <h1 className="mx-2 text-xl font-bold text-gray-900">Dashboard</h1>
        </div>
        <input
          type="text"
          className="flex-grow sm:flex-grow-0 w-36 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="search"
          placeholder="Search..."
        />
      </header>

      {/* <!----------------- cryptocurrencies -----------------> */}
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center border border-transparent rounded-3xl p-5 bg-white">
          <Image
            width={32}
            height={32}
            className="w-8 h-8 mr-3"
            src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
            alt="bitcoin"
          />
          <div>
            <div className="font-bold">Bitcoin</div>
            <div className="text-sm text-gray-600">$32,221</div>
          </div>
        </div>

        <div className="flex items-center border border-transparent rounded-3xl p-5 bg-white">
          <Image
            width={32}
            height={32}
            className="w-8 h-8 mr-3"
            src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
            alt="Ethereum"
          />
          <div>
            <div className="font-bold">Ethereum</div>
            <div className="text-sm text-gray-600">$1,344.49</div>
          </div>
        </div>
        <div className="flex items-center border border-transparent rounded-3xl p-5 bg-white">
          <Image
            width={32}
            height={32}
            className="w-8 h-8 mr-3"
            src="https://assets.coingecko.com/coins/images/2/large/litecoin.png?1547033580"
            alt="Litecoin"
          />
          <div>
            <div className="font-bold">Litecoin</div>
            <div className="text-sm text-gray-600">$134.36</div>
          </div>
        </div>
        <div className="flex items-center border border-transparent rounded-3xl p-5 bg-white">
          <Image
            width={32}
            height={32}
            className="w-8 h-8 mr-3"
            src="https://assets.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png?1594689492"
            alt="Bitcoin Cash"
          />
          <div>
            <div className="font-bold">Bitcoin Cash</div>
            <div className="text-sm text-gray-600">$428.33</div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          {/* <!----------------- Calendar -----------------> */}
          <div className="flex flex-col w-full p-4">
            <h1 className="text-2xl font-bold text-gray-900">February</h1>
            <div className="grid grid-cols-7 grid-rows-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500">
                Sun
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500">
                Mon
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500">
                Tue
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500">
                Wed
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500">
                Thu
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500">
                Fri
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center text-gray-500">
                Sat
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full">
                31
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                1
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full bg-yellow-200">
                2
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                3
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                4
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                5
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                6
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                7
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                8
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                9
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                10
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                11
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                12
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                13
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                14
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                15
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                16
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                17
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                18
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                19
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                20
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                21
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                22
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                23
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                24
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                25
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                26
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                27
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-800 hover:bg-yellow-200 rounded-full">
                28
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full">
                1
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full">
                2
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full">
                3
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full">
                4
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full">
                5
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 grid place-items-center m-auto text-center cursor-pointer text-gray-400 hover:bg-yellow-200 rounded-full">
                6
              </div>
            </div>
          </div>

          {/* <!----------------- Lorem -----------------> */}
          <div className="flex flex-col w-full p-4">
            <div className="mb-4 text-2xl font-bold text-gray-900">Lorem</div>
            <div className="grid grid-cols-auto-1fr-auto grid-rows-5 gap-2 w-full">
              <div className="grid place-items-center">Image</div>
              <div className="grid place-items-center">Progress</div>
              <div className="grid place-items-center">Orders</div>

              <div className="grid place-items-center">
                <Image
                  width={32}
                  height={32}
                  className="w-12 rounded-full"
                  src="https://images.unsplash.com/profile-1588704999444-1b832088da38image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                  title="Thom Bradley"
                  alt="Thom Bradley"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-40 h-2 rounded-md bg-gray-300">
                  <div className="w-11/12 h-2 rounded-md bg-green-700"></div>
                </div>
              </div>
              <div className="grid place-items-center">210</div>

              <div className="grid place-items-center">
                <Image
                  width={32}
                  height={32}
                  className="w-12 rounded-full"
                  src="https://images.unsplash.com/profile-1601607115147-05bd9390e83fimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                  title="Liam Shaw"
                  alt="Liam Shaw"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-40 h-2 rounded-md bg-gray-300">
                  <div className="w-10/12 h-2 rounded-md bg-purple-700"></div>
                </div>
              </div>
              <div className="grid place-items-center">160</div>

              <div className="grid place-items-center">
                <Image
                  width={32}
                  height={32}
                  className="w-12 rounded-full"
                  src="https://images.unsplash.com/profile-1589428506859-8e8436b52465image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                  title="Gama. Films"
                  alt="Gama. Films"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-40 h-2 rounded-md bg-gray-300">
                  <div className="w-9/12 h-2 rounded-md bg-pink-700"></div>
                </div>
              </div>
              <div className="grid place-items-center">100</div>

              <div className="grid place-items-center">
                <Image
                  width={32}
                  height={32}
                  className="w-12 rounded-full"
                  src="https://images.unsplash.com/profile-1590413354417-c1befb996909image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                  title="Allec Gomes"
                  alt="Allec Gomes"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-40 h-2 rounded-md bg-gray-300">
                  <div className="w-1/2 h-2 rounded-md bg-blue-700"></div>
                </div>
              </div>
              <div className="grid place-items-center">80</div>

              <div className="grid place-items-center">
                <Image
                  width={32}
                  height={32}
                  className="w-12 rounded-full"
                  src="https://images.unsplash.com/profile-fb-1575866378-4a803b813236.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                  title="Brandon Atchison"
                  alt="Brandon Atchison"
                />
              </div>
              <div className="flex justify-center items-center">
                <div className="w-40 h-2 rounded-md bg-gray-300">
                  <div className="w-3/12 h-2 rounded-md bg-red-700"></div>
                </div>
              </div>
              <div className="grid place-items-center">40</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          {/* <!----------------- News -----------------> */}
          <div className="flex flex-col w-full p-4">
            <h1 className="mb-4 text-2xl font-bold text-gray-900">News</h1>
            <div className="flex flex-col mb-4">
              <div className="flex mb-4">
                <div className="min-w-min">
                  <div className="border-2 border-blue-700 hover:bg-blue-700 rounded-full w-4 h-4 mt-1 mr-2 cursor-pointer"></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="text-gray-400">Today, 11:30pm</div>
                  <div className="text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed, consectetur!
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="min-w-min">
                  <div className="border-2 border-purple-700 hover:bg-purple-700 rounded-full w-4 h-4 mt-1 mr-2 cursor-pointer"></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="text-gray-400">Today, 9pm</div>
                  <div className="text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed, consectetur!
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="min-w-min">
                  <div className="border-2 border-pink-700 hover:bg-pink-700 rounded-full w-4 h-4 mt-1 mr-2 cursor-pointer"></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="text-gray-400">Today, 8:30pm</div>
                  <div className="text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed, consectetur!
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="min-w-min">
                  <div className="border-2 border-green-700 hover:bg-green-700 rounded-full w-4 h-4 mt-1 mr-2 cursor-pointer"></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="text-gray-400">Today, 6pm</div>
                  <div className="text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sed, consectetur!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!----------------- Profile -----------------> */}
          <div className="flex flex-col w-full p-4">
            <h1 className="mb-4 text-2xl font-bold text-gray-900">Profile</h1>
            <div
              id="profile-progress"
              className="w-52 h-52 mb-8 m-auto grid place-items-center text-4xl font-bold"
            >
              75%
            </div>
            <div className="font-bold text-center text-gray-900">
              75% of your profile is complete
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
