

export default function Login() {

    const htmlPage = () => {
        return(
            <div class="container">
                <div class="frame">
                    <div class="nav">
                        <ul >
                            <li class="signin-active"><a class="btn">Sign in</a></li>
                            <li class="signup-inactive"><a class="btn">Sign up </a></li>
                        </ul>
                    </div>
                    <div ng-app ng-init="checked = false">
                        <form class="form-signin" action="" method="post" name="form">
                            <label for="username">Username</label>
                            <input class="form-styling" type="text" name="username" placeholder=""/>
                            <label for="password">Password</label>
                            <input class="form-styling" type="text" name="password" placeholder=""/>
                            <div class="btn-animate">
                                <a class="btn-signin">Sign in</a>
                            </div>
                        </form>
                        <form class="form-signup" action="" method="post" name="form">
                            <label for="fullname">Full name</label>
                            <input class="form-styling" type="text" name="fullname" placeholder=""/>
                            <label for="email">Email</label>
                            <input class="form-styling" type="text" name="email" placeholder=""/>
                            <label for="password">Password</label>
                            <input class="form-styling" type="text" name="password" placeholder=""/>
                            <label for="confirmpassword">Confirm password</label>
                            <input class="form-styling" type="text" name="confirmpassword" placeholder=""/>
                            <a ng-click="checked = !checked" class="btn-signup">Sign Up</a>
                        </form>
                        <div  class="success">
                            <div class="successtext">
                            <p> Thanks for signing up! Check your email for confirmation.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="cover-photo"></div>
                        <div class="profile-photo"></div>
                        <h1 class="welcome">Welcome, Chris</h1>
                        <a class="btn-goback" value="Refresh" onClick="history.go()">Go back</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div >
            <main >
                {htmlPage()}
            </main>
        </div>
    )
}