import Image from "next/image";
import PageInfo from "./components/dashboard/PageInfo";

const Home = () => {
  return (
    <div className="">
      <h1 className="mt-2 p-2 mb-12 text-xl font-bold text-gray-900">Dashboard</h1>
      <div className="flex h-screen gap-8 mt-4 p-2">
        <div className="flex flex-1 justify-center">
          <div className="space-y-6">
            <p className="font-extrabold">ファイルシステム</p>
            <section className="">
              <div className="flex items-center p-4 bg-white shadow rounded-lg">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-8 w-8 text-cyan-600 bg-cyan-100 rounded-full mr-6">
                  <Image
                    width={32}
                    height={32}
                    src="/uploads/icons8-document.svg"
                    alt=""
                  />
                </div>
                <div>
                  <span className="block text-gray-500 whitespace-nowrap">
                    ドキュメント
                  </span>
                  <span className="block text-xl mt-1">4</span>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white shadow rounded-lg mt-6">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-8 w-8 text-green-600 bg-green-100 rounded-full mr-6">
                  <Image
                    width={32}
                    height={32}
                    src="/uploads/icons8-image-100.png"
                    alt=""
                  />
                </div>
                <div>
                  <span className="block text-gray-500">メディア</span>
                  <span className="block text-xl mt-1">3</span>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white shadow rounded-lg mt-6">
                <div className="inline-flex flex-shrink-0 items-center justify-center h-8 w-8 text-violet-600 bg-violet-100 rounded-full mr-6">
                  <Image
                    width={32}
                    height={32}
                    src="/uploads/icons8-file.svg"
                    alt=""
                  />
                </div>
                <div>
                  <span className="block text-gray-500">ファイル</span>
                  <span className="block text-xl mt-1">24</span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="space-y-6">
            <p className="font-extrabold">ページ</p>
            <div className="pl-1 w-30 xl:w-80 lg:w-60 md:w-40 h-20 bg-indigo-400 rounded-lg shadow-md">
              <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                <div className="my-auto">
                  <p className=" whitespace-nowrap">合計</p>
                  <p className="text-lg">23</p>
                </div>
              </div>
            </div>
            <div className="pl-1 w-30 xl:w-80 lg:w-60 md:w-40 h-20 bg-green-500 rounded-lg shadow-md">
              <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                <div className="my-auto">
                  <p className=" whitespace-nowrap">公開</p>
                  <p className="text-lg">23</p>
                </div>
              </div>
            </div>
            <div className="pl-1 w-30 xl:w-80 lg:w-60 md:w-40 h-20 bg-orange-500 rounded-lg shadow-md">
              <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                <div className="my-auto">
                  <p className=" whitespace-nowrap">修正中</p>
                  <p className="text-lg">23</p>
                </div>
              </div>
            </div>
            <div className="pl-1 w-30 xl:w-80 lg:w-60 md:w-40 h-20 bg-gray-500 rounded-lg shadow-md">
              <div className="flex w-full h-full py-2 px-4 bg-white rounded-lg justify-between">
                <div className="my-auto">
                  <p className=" whitespace-nowrap">非公開</p>
                  <p className="text-lg">23</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
