import Link from 'next/link';

const Menu = () => {
    return (
        <div>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/transactions">Transactions</Link>
            <Link href="/payouts">Payouts</Link>
            <Link href="/users">Users</Link>
        </div>
    )
};

export default Menu;