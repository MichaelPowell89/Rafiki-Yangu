import React,{Component} from "react";
import ReactDOM from "react-dom";

class Donations extends Component {
  componentDidMount() {
    const script = document.createElement("script");    script.async = true;    script.src = "https://cdn.raisely.com/v3/public/embed.js";    this.div.appendChild(script);  }
  render() {
    return (
        <div id="raisely-donate" class="donationBlock" data-campaign-path="rafiki-yangu" data-width="100%" data-height="800" ref={el => (this.div = el)}></div>
    );
  }
}

export default Donations;