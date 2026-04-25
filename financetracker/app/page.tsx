import Link from 'next/link'


export default function Page() {
    
    return (
        <html>
            <body>
                <div>
                    <Link href="/signup">
                        <button>signup</button>
                    </Link>
                    <Link href="/login">
                        <button>login</button>
                    </Link>
                </div>
                <h1>Hello Next.js</h1>
                
                
            </body>
        </html>
    )
}
