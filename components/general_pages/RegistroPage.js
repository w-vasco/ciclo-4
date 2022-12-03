import Registro from "../Registro/Registro"

export default function RegistroPage(){

    const renderRegistro = () => {

        return (
            <section>
                <Registro/>
            </section>
        )
    }

    const element = [renderRegistro()]
    return element;
}