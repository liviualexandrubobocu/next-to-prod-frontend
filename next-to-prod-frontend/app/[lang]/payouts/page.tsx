import Head from 'next/head';
import { getDictionary } from '../dictionaries';

export default async function Payouts({ params: { lang }}: {params: {lang: string}}){
  const dict = await getDictionary(lang);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <Head>
            <title>Payouts</title>
          </Head>
    
          <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-6xl font-bold">
              Welcome to your <a className="text-blue-600">{dict.payouts.title}!</a>
            </h1>
    
            <div className="mt-8">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" className="py-3 px-6">Transaction ID</th>
                    <th scope="col" className="py-3 px-6">Amount</th>
                    <th scope="col" className="py-3 px-6">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Sample transactions - replace with actual data */}
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>
                    <td className="py-4 px-6">$100.00</td>
                    <td className="py-4 px-6">2024-04-01</td>
                    </tr>
                    {/* Repeat for more transactions */}
                </tbody>
                </table>
            </div>
            </div>
          </main>
        </div>
      )
}