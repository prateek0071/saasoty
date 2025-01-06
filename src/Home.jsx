import HomeFilter from "./components/home_components/HomeFilter";
import HomeCategories from "./components/home_components/HomeCategories";
export default function Home() {
    console.log("homepage is rendering");
  
    return (
      <>
        <div className="container-fluid justify-content-center" style={{ marginTop: "110px" }}>
          <center>
            <br /><br /><br />
            <h1 className="gradient-text m-2">One Platform for Everything Software</h1>
           
            <div class="input-group mb-3 mt-5 p-4 justify-content-center">
            <span class="input-group-text"><h2>🔎</h2></span>
            <input width={"50%"} type="text" class="form-control fm1 p-2" aria-label="Dollar amount (with dot and two decimal places)" placeholder="Enter product name, software category..."/>
            </div><hr /><br />

            {/* filter */}
            <div className="container"><HomeFilter></HomeFilter></div><br /><br /><br />
            <HomeCategories></HomeCategories>

            
            


          </center>
        </div>
      </>
    );
  }
  