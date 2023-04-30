import { Component } from "react";

class Carousel extends Component{
    state = {
        active: 0
    }
    static defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
      };


      //write arrow func to caprure rhe scope where been written (capture Carosel)
    //   handleIndexClick(){
    //     console.log(this);
    //   }
     
    handleIndexClick = event => {
        this.setState({
          active: +event.target.dataset.index
        });
      };

      render(){
        // throw new Error("lol error")
        const { active } = this.state;
        const { images } = this.props;
        return (
            <div className="carousel">
            <img src={images[active]} alt="animal" />
            <div className="carousel-smaller">
              {images.map((photo, index) => (
                // eslint-disable-next-line
                <img
                onClick={this.handleIndexClick}
                  key={photo}
                  src={photo}
                  className={index === active ? "active" : ""}
                  alt="animal thumbnail"
                  data-index={index}
                />
              ))}
            </div>
          </div>
        )
      }
      
      
}
export default Carousel;