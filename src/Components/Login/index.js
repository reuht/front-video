import { useState } from "react";

const Login = () => {

    const [data, setData] = useState({
        name: "",
        pass: ""
    }); 

    const handlerData = (e) => {
        setData({
            ...data, 
            [e.target.name]: e.target.value.trim()
        })
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();
        console.log(data)
    }


  return (
    <div className="container">
      <div className="row my-5">
        <div className="col ms-3">
        <form onSubmit={handlerSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="name"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handlerData}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="pass"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handlerData}
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={handlerData}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
