import CategoriesPage from "@/components/template/CategoriesPage";

export default function Categories({data}) {
    console.log(data)
    return(
        <CategoriesPage  data={data} />
    )
}

export async function getServerSideProps(context) {
    const {query:{difficulty, time}} = context;
    const res = await fetch(`${process.env.BASE_URL}/data`);
    const json = await res.json();

    const data = json.filter(item => {

        const difficultyResult = item.details.filter(detail => detail.Difficulty && detail.Difficulty === difficulty);

        const timeResult = item.details.filter(detail => {
            const cookingTime = detail["Cooking Time"] || "";
            const [timeSplited] = cookingTime.split(" ");

            if(time === "less" && timeSplited && +timeSplited <= 30 ){
                return detail;
            } else if(time === "more" && timeSplited && +timeSplited >= 30) {
                return detail;
            }
        })

        if(time && difficulty && timeResult.length && difficultyResult.length) {
            return item;
        } else if(!time && difficulty && difficultyResult.length){
            return item;
        } else if (time && !difficulty && timeResult.length) {
            return item
        }

    })

    return{
        props:{data}
    }
    
}
