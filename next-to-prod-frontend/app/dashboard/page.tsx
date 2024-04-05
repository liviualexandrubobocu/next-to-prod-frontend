import Head from 'next/head';

export default function Dashboard(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Transaction Management Dashboard</title>
          </Head>
    
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Welcome to your <a className="text-blue-600">Dashboard!</a>
            </h1>
          </main>
        </div>
      )
}