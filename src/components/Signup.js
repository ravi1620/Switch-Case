import React, { useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Navigation from "./Navigation";

function Signup() {
  let ageInputRef = useRef();
  let ageResultRef = useRef();
  let firstNameInputRef = useRef();
  let firstNameResultRef = useRef();
  let lastNameInputRef = useRef();
  let lastNameResultRef = useRef();
  let selectStateRef = useRef();
  let resultRef = useRef();
  let maleRBRef = useRef();
  let femaleRBRef = useRef();
  let selectedGender;
  let selectedMS;
  let salutation;

  let capitalCity = "";

  let languagesKnown = {
    tel: false,
    hindi: false,
    eng: false,
  };

  let loc = useLocation();
  console.log(loc);

  let signupAccount = () => {
    if (selectStateRef.current.value == "Select State") {
      alert("Please select your state.");
    } else {
      if (selectedGender == "Male") {
        salutation = "Mr.";
      }
      if (selectedGender == "Female") {
        if (selectedMS == "Single") {
          salutation = "Miss.";
        } else {
          salutation = "Mrs.";
        }
      }
      console.log(languagesKnown);

      resultRef.current.innerHTML = `${salutation} ${
        firstNameInputRef.current.value
      }
            ${lastNameInputRef.current.value}  is from 
            ${selectStateRef.current.value},  you know these Languages( ${
        languagesKnown.tel == true ? "Telugu" : ""
      }
            ${languagesKnown.hindi == true ? "Hindi" : ""} 
            ${
              languagesKnown.eng == true ? "English" : ""
            }) and your account has been created`;
    }
  };

  return (
    <div className="App">
      <h1>
        {loc && loc.state && loc.state.msg
          ? loc.state.msg
          : "No Message to Display here"}
      </h1>

      <form className="form">
        <div>
          <label className="label">First Name</label>
          <input
            type="text"
            ref={firstNameInputRef}
            minLength="2"
            maxLength="20"
          ></input>
          <span className="span" ref={firstNameResultRef}></span>
        </div>
        <div>
          <label className="label">LastName</label>
          <input type="text" ref={lastNameInputRef}></input>
          <span className="span" ref={lastNameResultRef}></span>
        </div>
        <div>
          <label className="label">Age</label>
          <input
            type="number"
            minLength="1"
            maxLength="3"
            ref={ageInputRef}
          ></input>
          <span className="span" ref={ageResultRef}></span>
          <div>
            <label className="label">Languages Known</label>

            <input
              type="checkbox"
              onChange={(eventObj) => {
                languagesKnown.tel = eventObj.target.checked;
                // if(eventObj.target.checked == true){
                // languagesKnown.tel = true;
                // }else{
                //   languagesKnown.tel = true;
                // }
              }}
            ></input>
            <label className="internalLabels">Telugu</label>
            <input
              type="checkbox"
              onChange={(eventObj) => {
                languagesKnown.hindi = eventObj.target.checked;
              }}
            ></input>
            <label className="internalLabels">Hindi</label>
            <input
              type="checkbox"
              onChange={(eventObj) => {
                languagesKnown.eng = eventObj.target.checked;
              }}
            ></input>
            <label className="internalLabels">English</label>
          </div>
        </div>
        <div>
          <label className="label">Gender</label>
          <label className="label" style={{ width: "auto" }}>
            Male
          </label>
          <input
            type="radio"
            name="Gender"
            ref={maleRBRef}
            onChange={() => {
              console.log(maleRBRef.current.value);
              if (maleRBRef.current.checked == true) {
                selectedGender = "Male";
              }
            }}
          ></input>

          <label className="label" style={{ width: "40px" }}>
            Female
          </label>
          <input
            type="radio"
            name="Gender"
            ref={femaleRBRef}
            onChange={() => {
              console.log(femaleRBRef.current.value);
              if (femaleRBRef.current.checked == true) {
                selectedGender = "Female";
              }
            }}
          ></input>
        </div>
        <div>
          <label className="label">Marital Status</label>
          <label className="label" style={{ width: "auto" }}>
            Single
          </label>
          <input
            type="radio"
            name="MS"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "Single";
              }
            }}
          ></input>

          <label className="label" style={{ width: "auto" }}>
            Married
          </label>
          <input
            type="radio"
            name="MS"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                selectedMS = "Married";
              }
            }}
          ></input>
        </div>
        <div>
          <label className="label">Address</label>
          <textarea></textarea>
        </div>

        <div>
          <label className="label">Postal Code</label>
          <input type="number"></input>
        </div>
        <div>
          <label className="label">Select State</label>
          <select
            ref={selectStateRef}
            onChange={() => {
              let selectedState = selectStateRef.current.value;
              // if (selectedState == "Andhra Pradesh") {
              //   console.log("Amaravati");
              // } else if (selectedState == "Arunachal Pradesh") {
              //   console.log("Itanagar");
              // } else if (selectedState == "Assam") {
              //   console.log("Sikkim");
              // } else if (selectedState == "Bihar") {
              //   console.log("Patna");
              // } else if (selectedState == "Chattisgarh") {
              //   console.log("Raipur");
              // } else if (selectedState == "Gujarat") {
              //   console.log("Gandhi Nagar");
              // } else if (selectedState == "Haryana") {
              //   console.log("Chandigarh");
              // } else if (selectedState == "Jammu and Kashmir") {
              //   console.log("Srinagar");
              // } else if (selectedState == "Jarkhand") {
              //   console.log("Ranchi");
              // } else if (selectedState == "Karnataka") {
              //   console.log("Banglore");
              // } else if (selectedState == "Odisha") {
              //   console.log("Bhubaneswar");
              // } else if (selectedState == "Punjab") {
              //   console.log("Chandigarh");
              // } else {
              //   console.log("Please select the state properly");
              // }

              switch (selectedState) {
                case "Andhra Pradesh":
                  console.log("Amaravati");
                  break;
                case "Arunachal Pradesh":
                  console.log("Itanagr");
                  break;
                case "Assam":
                  console.log("Dispur");
                  break;
                case "Bihar":
                  console.log("Patna");
                  break;
                case "Chattisgarh":
                  console.log("Raipur");
                  break;
                case "Haryana":
                  console.log("Chandigarh");
                  break;
                case "Gujarat":
                  console.log("Gandhi Nagar");
                  break;
                case "Jammu and Kashmir":
                  console.log("Srinagar");
                  break;
                case "Jarkhand":
                  console.log("Ranchi");
                  break;
                  case "Karnataka":
                  console.log("Banglore");
                  break;
                  case "Odisha":
                  console.log("Bhubaneshar");
                  break;case "Punjab":
                  console.log("Chandigarh");
                  break;
                  default:
                    console.log("Please select properly");
                    break;
              }
            }}
          >
            <option>Select State</option>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chattisgarh</option>
            <option>Gujarat</option>
            <option value="HR">Haryana</option>
            <option>Jammu and Kashmir</option>
            <option>Jarkhand</option>
            <option>Karnataka</option>
            <option>Odisha</option>
            <option>Punjab</option>
          </select>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              signupAccount();
            }}
          >
            Create Account
          </button>
        </div>
        <p ref={resultRef}></p>
        <Link to="/home">Desktop</Link>
      </form>
    </div>
  );
}

export default Signup;
