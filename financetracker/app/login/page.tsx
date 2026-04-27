import Link from 'next/link'
export default function Login() {
    return (
        <main className="credentialsPage">
            <div className="container">
            <h1>Login page</h1>

            <label><b>Email </b></label>
            <input type="text" placeholder="Enter Email" name = "email" required></input>

            <label><b>Password </b></label>
            <input type="text" placeholder="Enter Password" name = "password" required></input>

            <Link href="/homepage">
                <button className="navButton">submit</button>
            </Link>

            <Link href = "/">
                <button className="navButton">back</button>
            </Link>
            </div>
        </main>
    )
}
