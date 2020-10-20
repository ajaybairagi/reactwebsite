import React , {useState} from 'react';

const Contact = ()=> {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: ''

    });

    const InputEvent = (e) =>{
        const {name , value} = e.target;

        setData( (oldVals) => {
            return {
                ...oldVals,
                [name] : value
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(` Full Name: ${data.fullname} Phone: ${data.phone} Email: ${data.email}`);
        setData( () => {
            return {
                fullname: '',
                phone: '',
                email: '',
                msg: ''
            }
        });
    };

  return (
    <>
    <div className="container contact_div">
   <div className="row">
      <div className="col-md-6 col-10 mx-auto">
         <form onSubmit={formSubmit}>
            <div className="mb-3">
                <label className="form-label">FullName</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="fullnameInput" 
                        name="fullname" 
                        placeholder="Enter your name" 
                        value={data.fullname}
                        onChange={InputEvent}
                        />
                </div>
            <div className="mb-3">
                <label className="form-label">Phone</label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="phoneInput" 
                    name="phone" 
                    placeholder="mobile number" 
                    value={data.phone}
                    onChange={InputEvent}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="emailInput" 
                    name="email" 
                    placeholder="name@example.com" 
                    value={data.email}
                    onChange={InputEvent}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea 
                    className="form-control" 
                    id="msgInput" 
                    rows="3" 
                    name="msg"
                    >
                </textarea>
            </div>
            <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
         </form>
      </div>
   </div>
</div>
    />
  </>
  )
}

export default Contact;