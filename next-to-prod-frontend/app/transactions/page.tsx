import Head from 'next/head';
// import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type Transaction = {
  id: string;
  amount: string;
  date: string;
}

async function getData() {
  const res = await fetch('http://localhost:5000/transactions');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

// export const getServerSideProps = (async () => {
//   const res = await fetch('https://localhost:5000/transactions');
//   const transactions: Transaction[] = await res.json();

//   return { props: { transactions }};
// }) satisfies GetServerSidePropsType<{ transactions: Transaction[]}>;

export default async function Transactions() {

  const transactions = await getData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Transaction Dashboard</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to your <a className="text-blue-600">Transaction Dashboard!</a>
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
                {transactions.map((transaction: Transaction) => (
                  <tr key={transaction.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{transaction.id}</th>
                    <td className="py-4 px-6">{transaction.amount}</td>
                    <td className="py-4 px-6">{transaction.date}</td>
                  </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
      </main>
    </div>
  )
}
