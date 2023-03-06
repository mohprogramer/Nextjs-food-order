export default function CardDetails({data}) {
    return(
        <div>
            
        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch("http://localhost:4000/data");
    const json = await res.json();
    const data = json.slice(0,10);

    const paths = data.map(food => ({params:{id: food.id.toString()}}))

    return {
        paths,
        fallback:true
    }
}

export async function getStaticProps(context) {
    const {params} = context;
    const res = await fetch(`http://localhost:4000/data/${params.id}`);
    const data = await res.json();

    return{
        props:{data}
    }
}