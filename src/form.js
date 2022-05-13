import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";
import slide4 from "./slide4.jpg";
import slide5 from "./slide5.jpg";
import InputNumber from "./formbutton";
import Slideshow from "./slide";
import React, { useState } from "react";





    function Form() {   


    
    const [data, setData] = useState({name:"", email:"", num:"", hotel:"", date1:"", date2:"",rooms:"" })

    const [isToggle, setIsToggled] = useState(false)

    
    
     function changeData(e) {

        setData({data})
      return (
        console.log([e.target.value])
      )
    }
    
          
    function Booking() {


        return <div>

            Booking details here: {data.name}
        </div>
    }
    
    

    
    
   
           
   
    return (<div className="form-grid">
        


        <form className="form">

        <b> <h2>Book a hotel</h2>
            </b>
            <br/>


            <label htmlFor="name">Full Name: </label>
            <input type='text'  placeholder="Your name here.." required 
            value={data.name}
            onChange={changeData}
            name="name"/>
            <br/><br/>


            <label>Email Address: </label>
            <input type='email'
           
            name="email" placeholder="user@gmail.com"
            value={data.email}
            onChange={changeData}
            />
            <br/><br/>

            <label>Phone Number</label>
            <input type="text" placeholder="(xxx)-xxx-xxxx"
            name="num"
            value={data.num}
            onChange={changeData}

            />
            <br/><br/>


            <label>Choose a hotel: </label>
			<input list="hotelList" required 
            value={data.hotel}
            onChange={changeData}

            name="hotel"/>
            
		<datalist id="hotelList">
			<option value="Riu" />
			<option value="Jamaica Inn" />
			<option value="S Hotel" />
			<option value="Sandals Royal Plantation" />
			<option value="The Cliff Hotel" />
			<option value="Moon Palace Hotel" />
			<option value="Rockhouse Hotel" />
			<option value="Spanish Court Hotel" />
			<option value="Breathless Resort and Spa" />
			<option value="Iberostar Grand Hotel" />
			<option value="Grand Bahia Principe" />
			<option value="Secrets Wild Orchid Hotel" />
			<option value="The Trident Hotel" />
			<option value="Royalton White Sands Hotel" />
			<option value="Strawberry Hill Hotel" />
			<option value="Half Moon Hotel" />
			<option value="Grand Palladium Lady Hamilton Resort and Spa" />
			<option value="Frenchman's Cove Resort" />
			<option value="GoldenEye Hotel" />
            <option value="Excellence Oyster Bay" />
            <option value="Kaiser's Hotel" />
            <option value="Coco La Palm" />
            <option value="Rayon Resort" />
            <option value="Azul Beach" />




		</datalist>

        <br/><br/>

            <label htmlFor="check-in">Check-in Date: </label>
            <input
                type="date"
                id="check-in"
                required
                value={data.date1}
                name="date1"
                onChange={changeData}

            />

            <br/> <br/>

            <span> </span>


            <label htmlFor="check-out">Check-out Date: </label>
            <input
                type="date"
                id="check-out"
                required
                value={data.date2}
                name="date2"
                            onChange={changeData}


            />

           
            <br /><br/>
            
            <div className="form-data">

            <span className="rooms">
            <p>Rooms</p>
            <InputNumber
            value={data.rooms}
                name="rooms"
                onChange={changeData}

                />
            <br />
            </span>
            

            <span className="adults">
            <p>Adults</p>
            <InputNumber/>
            <br />
            </span>
           

            <span className="children">
            <p>Children</p>
            <InputNumber/>
            <br />
            </span>
            
            </div>
            <br /><br/>

            <label htmlFor="work"> <input type="checkbox" id="work" name="interest" value="work" /> I am travelling for work</label>

            <br/> 
            <br/> 
            <br/> 

            <button 
            className="button-submit"
            type="submit"
            onClick={() => setIsToggled(!isToggle)}
            
                          
            >Book Reservation!</button> 
            
            
            <br/><br/>
            
    

        </form>


        
        <div className="slideContainer">

               <b> <h3 className="slide-h3">Majestic Destinations await...</h3></b>

                <Slideshow imgs={[ slide1, slide2, slide3, slide4, slide5]}
                > 
                </Slideshow>
        </div>


       
        {isToggle && <Booking/> }
        

    </div>)
    
}



export default Form;
