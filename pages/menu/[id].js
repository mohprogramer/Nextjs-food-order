export default function CardDetails() {
    return(
        <div>
            details
        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch("http://localhost:4000/data");
    const data = await res.json();

}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`http://localhost:4000/data/${params.id}`);
    const data = await res.json();
    console.log(data)
    return{
        props:{data}
    }
}