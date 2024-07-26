import "../src/App.css"

function Form() {
    return(
            <div className="homeCont">
                <img src="https://colorlib.com/etc/regform/colorlib-regform-3/images/bg-heading-03.jpg" className="image"></img>
                <div className="registrationInfo">
                    <h1 className="title">Registration Info</h1>
                    <div className="inputCont">
                    <input type="name" placeholder="Name" className="name"></input>
                    <input type="date" placeholder="Birthdate" className="name"></input>
                    <input type="gender" placeholder="Gender" className="name"></input>
                    <input type="email" placeholder="Elmail" className="name"></input>
                    <input type="number" placeholder="Phone" className="name"></input>
                    </div>
                    <button className="btn">Submit</button>
                </div>
            </div>
    )
}

export default Form