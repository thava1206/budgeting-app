import Link from 'next/link'
export default function Homepage() {
    return (
        <main className="Title">
            <h1>HOMEPAGE</h1>
            <Link href = "/login">
                <button>back</button>
            </Link>
        </main>
    )
}
