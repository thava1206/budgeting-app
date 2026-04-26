import "../homepage.css"
import Link from 'next/link'
export default function Homepage() {
    return (
        <html>
            <body>
                <div className="Title">
                    <h1>HOMEPAGE</h1>
                    <Link href = "/login">
                        <button>back</button>
                    </Link>
                    
                </div>
                
            </body>
        </html>
    )
}