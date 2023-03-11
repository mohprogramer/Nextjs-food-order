import CategoriesPage from "@/components/template/CategoriesPage";

export default function Categories({data}) {
    console.log(data)
    return(
        <CategoriesPage />
    )
}

export async function getServerSideProps(context) {
    const {query:{difficulty , time}} = context;
    const res = await fetch("http://localhost:4000/data");
    const json = await res.json();

    const data = json.filter(item => {
        
        const difficultyResult = item.details.filter(detail => detail.Difficulty && detail.Difficulty === difficulty);
        // console.log(difficultyResult)
        
        const timeResult = item.details.filter(detail => {
            const cookingTime = detail["Cooking Time"] || "";
            const [timeDetail] = cookingTime.split(" ");
            
            if(time === "less" && timeDetail && +timeDetail <= 30 ){
                return detail;
            } else if(time === "more" && timeDetail && +timeDetail > 30){
                return detail;
            }
        })

        if(time && difficulty && difficultyResult.length && timeResult.length) {
            return item;
        } else if(!time && difficulty && difficultyResult.length) {
            return item;
        } else if(time && !difficulty && timeResult.length) {
            return item;
        }
    })
    return{
        props:{data}
    }
}
