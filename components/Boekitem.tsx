

type    blogtype = {
    title: string
}

export default function Boekitem({title} :blogtype) {

    return(
        <section>
            <h1>{title}</h1>
        </section>
    )

}











