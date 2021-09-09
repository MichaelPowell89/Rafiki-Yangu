import React, {useState} from "react";

function Content (props){
  const [isActive, setActive] = useState("false")

  const handleToggle = () => {
    setActive(!isActive);
  };

    return (
      <div class="card-group">
        <div className={isActive ? "card collapseCard" : "card"}>
        {/* <img src={props.Image} class="card-img-top" style="width: 100%" alt="..."></img> */}
          <div class="card-body">
              <h4 className="card-title">
                {props.Title}
              </h4>
              <p className={isActive ? "card-text text-truncate" : "card-text"}>
                {props.Description}
              </p>
              <a href="#">
                <button class="btn btn-primary" onClick={handleToggle}>
                  {isActive ? "Read More" : "Read Less"}
                </button>
              </a>
          </div>
        </div>
      </div>
    );
}

export default Content;