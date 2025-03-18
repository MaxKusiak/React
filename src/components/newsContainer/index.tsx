import "./style.css"
import { News } from "../../types/newsType"

function isImportant(props: News){
    if(props.isImportant){
        return <div className="text"><a href={props.link}><b>{props.title}</b></a></div>
    }else{
        return <div className="text"><a href={props.link}>{props.title}</a></div>
    }
}

const NewsBlock = (props: News) => {
    return (
        <>
            <div className="news">
                <div className="time">{props.time.getHours()}:{props.time.getMinutes()}</div>
                {isImportant(props)}
            </div>
        </>
    )
}

export default NewsBlock
