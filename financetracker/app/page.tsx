import Link from 'next/link'


export default function Page() {
    
    return (
        <main className="landingPage">
            <div className="navButtons">
                <Link href="/signup">
                    <button>signup</button>
                </Link>
                <Link href="/login">
                    <button>login</button>
                </Link>
            </div>
            <h1 className="logo">HOW TO NOT BE BROKE!</h1>
        </main>
    )
}
