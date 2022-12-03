import Listado from "../Listado/Listado"

export default function ListadoPage(){

    const renderListado = () => {

        return (
            <section>
                <Listado/>
            </section>
        )
    }

    const element = [renderListado()]
    return element;
}