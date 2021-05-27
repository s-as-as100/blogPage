import React, { Component } from "react";
import Slider from "react-slick"; 
import './NewsBlog.css'


 ;
 
export default class AsNavFor extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        nav1: null,
        nav2: null
      };
    }
  
    componentDidMount() {
      this.setState({
        nav1: this.slider1,
        nav2: this.slider2
      });
    }
  
    render() {
    
        const settings = {
           
            
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            
          };
      return (
         
       
       <div className=" combine-slider">
          <h2> </h2>
          <div className="slider-1" >
          
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
          >
            <div >
            
               <img className="img-2" src={'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'}  
               alt="slide1"  />
            </div>
            <div >
            
            <img  className="img-2" src={'https://picsum.photos/id/237/200/300'}  
            alt="slide1"
            />
         </div>
         <div>
            <img className="img-2" src={'https://picsum.photos/200/300/?blur=2'}  />
         </div>
         <div  >
            
            <img className="img-2" src={'https://picsum.photos/200/300?grayscale'}  
            alt="slide1"
            />
         </div>
        
         
         {/* <div  > */}
{/*             
            <img className="img-2" src={'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80'}  
            alt="slide1"
            />
         </div>
         <div  >
            
            <img className="img-2" src={'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80'}  
            alt="slide1"
            />
         </div>
         <div  >
            
            <img  className="img-2" src={'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80'}  
            alt="slide1"
            />
         </div> */}
          </Slider>

          </div>
           
          <div className="slider-2">
          <h4>News Blog</h4>
          
          <Slider {...settings}
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
          >
             
             <div>
            
            <img className="img-1" src={'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'}  
               alt="slide1"  />
         
         </div>

         <div>
            <img className="img-1" src={'https://picsum.photos/200/300/?blur=2'}  />
         </div>
             
         <div   >
            
            <img className="img-1"  src={'https://picsum.photos/id/237/200/300'}   
            alt="slide1"
            />
         </div>
            
         <div  >
            
            <img className="img-1" src={'https://picsum.photos/200/300?grayscale'}  
            alt="slide1"
            />
         </div>
{/*             
         <div  >
            
            <img className="img-1"  src={'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80'}  
            alt="slide1"
            />
         </div> */}
{/*             
         <div  >
            
            <img className="img-1"  src={'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80'}  
            alt="slide1"
            />
         </div>
           
         <div  >
            
            <img className="img-1"  src={'https://images.unsplash.com/photo-1598128558393-70ff21433be0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80'}  
            alt="slide1"
            />
         </div> */}
            
          </Slider>
          </div>
         
        </div>
      );
    }
  }