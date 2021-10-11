import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const{githubSignin,googleSignin}=useAuth();
    return (
        <> 
        <div className="w-50 p-2 mt-2 mx-auto loginForm">
            <h2 className="mt-3 text-center">Login</h2>
            <form className="m-5">
                <div>
                    <label htmlFor="email">Email</label>
                    <input class="form-control form-control-lg" type="text" placeholder="Your Email" />

                </div>

                <div>

                    <label className="pt-3" htmlFor="password">PassWord</label>
                    <input class="form-control form-control-lg" type="text" placeholder="Password" aria-label=".form-control-lg example" />
                </div>
                <button className="btn btn-primary mt-2 text-center">Login</button>
            </form> 
        </div>
       <div className="text-center mt-3">
       <button className="btn btn-dark me-3" onClick={googleSignin}>Google sign in</button>
         
         <button className="btn btn-dark" onClick={githubSignin}>Github sign in</button>
       </div>
        </>
    );
};

export default Login;