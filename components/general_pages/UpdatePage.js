import Update from "../Update/Update"

export default function UpdatePage(){

    const renderUpdate = () => {

        return (
            <section>
                <Update/>
            </section>
        )
    }

    const element = [renderUpdate()]
    return element;
}