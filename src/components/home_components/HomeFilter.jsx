

export default function HomeFilter(){
    return(
        <>
            <div className="row align-items-center">
                <div className="col">
                    <h4 className="dropdown-filter">
                        I am
                    </h4>
                   
                            <div class="btn-group">
                            <button class="dropdown-filter-button btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Designation
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            </div>
                           
                </div>

                <div className="col">
                <h4 className="dropdown-filter">
                        Looking for
                    </h4>
                   
                            <div class="btn-group">
                            <button class="dropdown-filter-button btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solution
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            </div>
                </div>
                <div className="col">
                <h4 className="dropdown-filter">
                        Software
                    </h4>
                   
                            <div class="btn-group">
                            <button class="dropdown-filter-button btn btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            </div>
                </div>
                <div className="col align-items-center justify-content-center"><br /><br />
                    <button className="ms-0 btn gradient-button" style={{width: "100px"}}><b>Go</b></button>
                </div>
            </div>
        
        </>
    );
}