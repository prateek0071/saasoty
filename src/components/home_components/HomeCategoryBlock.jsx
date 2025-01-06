import "src/assets/home/analytics_platforms.png";
import "src/assets/home/app_security.png";
import "src/assets/home/analytics_platforms.png";
import "src/assets/home/analytics_platforms.png";


export default function HomeCategoryBlock(props){
    const style1 = {
            padding: "20px",
            
    }

    return(
        <div style={style1}>
            <img src={props.imgSrc} alt="" />
            <br />
            <b>{props.category}</b>
        </div>
    );
}