import '../credentials.css'
import Link from 'next/link'

export default function Signup() {
    return (
        <html>
            <body>
                <div className="container">
                    <h1>Sign Up Page</h1>

                    <label><b>Email </b></label>
                    <input type="text" placeholder="Enter Email" name = "email" required></input>

                    <label><b>Password </b></label>
                    <input type="text" placeholder="Enter Password" name = "password" required></input>
                    
                    <label><b>Password-Repeat </b></label>
                    <input type="text" placeholder="Repeat Password" name = "repeat password" required></input>
                    
                    <label><b>Username </b></label>
                    <input type="text" placeholder="Enter Username" name = "username" required></input>

                    <Link href = "/homepage">
                        <button className="navButton">submit</button>
                    </Link>
                    <Link href ="/">
                        <button className="navButton">back</button>
                    </Link>
                    
                </div>
                
            </body>
        </html>
    )
}
