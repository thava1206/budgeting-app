import '../credentials.css'

export default function Login() {
    return (
        <html>
            <body>
                
                <div className="container">
                    <h1>Login page</h1>

                    <label><b>Email </b></label>
                    <input type="text" placeholder="Enter Email" name = "email" required></input>

                    <label><b>Password </b></label>
                    <input type="text" placeholder="Enter Password" name = "password" required></input>
                </div>
            </body>
        </html>
    )
}
