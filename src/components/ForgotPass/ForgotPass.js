import React, {useState} from 'react'
import { useFormik } from 'formik';
import { fschema } from './Fpass';

export default function ForgotPass() {

    const [showSuccessMsg,setShowSuccessMsg] = useState(false);
  const [dispMsg,setDispMsg] = useState("");
  const [showErrorsMsg,setShowErrorMsg] = useState(false);
  const successBg = 'alert alert-success alert-dismissible fade show';
  const warningBg = 'alert alert-warning alert-dismissible fade show';


  function myFuncCall (){
    window.location = '/login';
  }

    const style = {
        background: "white",
        height: "550px",
        // width:"1450px",
        marginLeft: "40px",
        marginRight: "40px",
        padding: "30px",
        borderRadius: "15px"
    }

    const passStyle = {
        color: "red"
    }
    function setToken(val) {

    }
    function accVerify() {

    }
    const initialValues = {
        email: "",
    }
    const Formik = useFormik({
        initialValues: initialValues,
        validationSchema: fschema,
        onSubmit: (values, action) => {
            console.log(values);
             try {
               var emailurl = values.email;
                fetch(`https://localhost:7214/api/User/forgot-password?email=${emailurl}`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                        "Access-Control-Max-Age": 86400
                    },
                    body: JSON.stringify(values)

                })
                    .then(res => {
                        if (res.status === 200) {
                            return res.text()
                            // window.location = '/l'
                        }
                        return res.text()

                    })
                    .then((data) => {
                        console.log(data);
                        // alert(data)
                        setDispMsg(data)
              setShowSuccessMsg(true);
              setTimeout(myFuncCall, 6000);
                    })
            } catch (error) {
                console.log("Error b->", error);
            }
            action.resetForm();
        }
    })
    return (
        <>
            <div className='d-flex justify-content-center' style={style}>
            
                <form onSubmit={Formik.handleSubmit}> <h2>Enter an email to reset your password.</h2>
                    <div className='form-row'>
                    {showSuccessMsg && <div className='p-4 tex-center'>
            <div className={(showErrorsMsg ? warningBg : successBg)} style={{width:"auto"}} role="alert">
            {showErrorsMsg ? <i class="bi bi-exclamation-circle"></i> : <i className="bi bi-check-circle mt-1"></i>} &nbsp;
              <strong>Hello user!</strong> {dispMsg}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={(e)=> {setShowSuccessMsg(false);}}></button>
            </div>
          </div> 
           }
                        <div className='col-lg-10'>
                            <input type="email" name="email" placeholder='Enter your registered email' value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.handleBlur} className='form-control shadow-none my-3' />
                            {Formik.errors.email && Formik.touched.email ? (<p className='Form-error'> {Formik.errors.email}</p>) : null}

                        </div>
                    </div>

                    <div className='form-row'>
                        <div className='col-lg-3'>
                            <button type="submit" onClick={accVerify} className="btn btn-dark mt-3 mb-4">Submit</button>
                        </div>
                    </div>


                </form>
            </div>
        </>
    )
}
