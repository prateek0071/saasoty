
import HomeCategoryBlock from "./HomeCategoryBlock";
export default function HomeCategories(){

    return(
        <div className="container home-categories-container">
            <h2 className=""></h2>
            <br /><br />
            <div className="row">
                <div className="col"><HomeCategoryBlock imgSrc="https://saasoty.com/api/media/toolcategories/CICD.png" category="CI/CD">
                </HomeCategoryBlock>
                </div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
    );
}