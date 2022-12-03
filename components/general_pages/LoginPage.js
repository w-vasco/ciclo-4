import Login from "../Login/Login"

export default function LoginPage(){


    const renderLogin = () => {
        return (
            <section>
                <Login/>
            </section>
        )
    }

    const element = [renderLogin()]
    return element;
}