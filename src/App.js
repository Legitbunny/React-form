import "./App.css";
import React, { useState } from "react";


function App() {

  const[formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Country: "India",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification:""

  });

  function changeHandler(event){
    const{name, value, checked, type} = event.target;
    setFormData((prev) => ({...prev, [name]:type === "checkbox" ? checked : value}))
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("form data");
    console.log(formdata);
  }

  return (
    <div className="flex flex-col items-center mt-12" >
      <form className="flex flex-col mx-auto w-[10/12] justify-center items-center gap-1" onSubmit={submitHandler}>

        <label htmlFor="firstName" >First Name</label>
        <input type="text" name="firstName" placeholder="Shreysh" id="firstName" value={FormData.firstName} onChange={changeHandler} 
        className="outline outline-2 rounded-md outline-slate-400 "/>
        
        <label htmlFor="lastName" >Last Name</label>
        <input type="text" name="lastName" placeholder="Singh" id="lastName" value={FormData.lastName} onChange={changeHandler} 
        className="outline outline-2 rounded-md outline-slate-400 " />
        
        <label htmlFor="email" >Email Address</label>
        <input type="email" name="email" placeholder="ssingh@duck.com" id="email" value={FormData.email} onChange={changeHandler} 
        className="outline outline-2 rounded-md outline-slate-400 " />
        
        <label htmlFor="Country" >Country</label>
        <select name="Country" id="Country" onChange={changeHandler} 
        value={FormData.Country}
        className="outline outline-2 rounded-md outline-slate-400 " >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
          <option value="Korea">Korea</option>
          <option value="Russia">Russia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
        </select>
        
        <label htmlFor="streetAddress" >Street Address</label>
        <input type="text" name="streetAddress" placeholder="123 Main St" id="streetAddress" onChange={changeHandler} 
        className="outline outline-2 rounded-md outline-slate-400 "
        value={FormData.streetAddress} />
        
        <label htmlFor="city" >City</label>
        <input type="text" name="city" placeholder="Lucknow" id="city" onChange={changeHandler} className="outline outline-2 rounded-md outline-slate-400 "
        value={FormData.city} />
        
        <label htmlFor="state" >State/Province</label>
        <input type="text" name="state" placeholder="Uttar Pradesh" id="state" onChange={changeHandler} 
        className="outline outline-2 rounded-md outline-slate-400 "
        value={FormData.state} />
        
        <label htmlFor="zip" >Zip/Postal Code</label>
        <input type="text" name="zip" placeholder="226001" id="zip" onChange={changeHandler} className="outline outline-2 rounded-md outline-slate-400 "
        value={FormData.zip} />

        <fieldset className="">
          <legend>By Email</legend>

          <div className="flex flex-row">
            <input type="checkbox" name="comments" id="comments"  checked={FormData.comments} onChange={changeHandler}  />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notifies when someone post a comment on a posting</p>
            </div>
          </div>

          <div className="flex flex-row">
            <input type="checkbox" name="candidates" id="candidates" checked={FormData.candidates} onChange={changeHandler} />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when candidate applies for a job</p>
            </div>
          </div>

          <div className="flex flex-row">
          <input type = "checkbox" name="offers" id="offers" checked={FormData.offers} onChange={changeHandler } />
            <div>
              <label htmlFor="offers">Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer</p>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>Push notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>



        </fieldset>

        <div className="flex flex-col gap-2">
          <div>
          <input type ="radio" name="pushNotification" id="everything" value="Everything" onChange={changeHandler } />
          <label htmlFor="everything">Everything</label>
          </div>        
          <div>
          <input type ="radio" name="pushNotification" id="same" value="Same as Email" onChange={changeHandler } />
          <label htmlFor="same">Same as Email</label>
          </div>
          <div>
          <input type ="radio" name="pushNotification" id="none" value="No push notifications" onChange={changeHandler } />
          <label htmlFor="none">No push notifications</label>
          </div>
        </div>

        <br />
        <button className="bg-blue-500 text-white rounded-md py-2 px-4">
          Save
        </button>
      </form>

    </div>
  );
}

export default App;
