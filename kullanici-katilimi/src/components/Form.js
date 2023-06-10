import React, { useState,useEffect } from 'react';
import * as Yup from 'yup'

export function Form(props){
    let {uyeler,setUyeler,editId,setEditId}=props;
   
    const emptyData={
        firstName :"",
        email: "",
        password: "",
        position: "",
        terms: false
    
    };
    let data=editId!=null ? uyeler[editId] : emptyData;
    const [uye,setUye]=useState (emptyData);
    const [valid,setValid]=useState (true);
    useEffect(() => {
        //Runs only on the first render
        setUye(data);
    
      }, [editId]);
    
   
      const [formStateErr, setFormStateErr] = useState({
        name :"",
        email: "",
        password: "",
        position: "",
        terms: "false"
      });
      const formSchema = Yup.object().shape({
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Must include email address."),
        password: Yup
          .string()
          .required("Password is Required")
          .min(6, "Passwords must be at least 6 characters long."),
        terms: Yup
          .boolean()
          .oneOf([true], "You must accept Terms and Conditions")
          // required isn't required for checkboxes.
      });
      useEffect(() => {
        formSchema
            .isValid(uye)
            .then(vld => setValid(!vld) );
          
          }, [uye]);
      
const handleChange=(e)=>{
    const{name,value}=e.target;
    Yup.reach(formSchema, name)
		.validate(value)
		.then(valid => { setFormStateErr({ ...formStateErr, [name]: "" }); })
		.catch(err => { setFormStateErr({ ...formStateErr, [name]: err.errors[0] }); }); 
    setFormStateErr({ ...formStateErr, [name]: value });

    setUye({...uye,[name]:value});
  
}
const handleChange1=(e)=>{
  const{name,checked}=e.target;

  setUye({...uye,[name]:checked});
 

}

useEffect(() => {
  
    
      console.log(formStateErr);
    }, [formStateErr]);

      
const handleSubmit=(e)=>{
    e.preventDefault();
    data=editId!=null ? editId : uyeler.length;
    const yeniuye={...uye,id:data}
    console.log(data,yeniuye,uyeler)
    editId!=null ?  uyeler[editId]=yeniuye : setUyeler([...uyeler,yeniuye]) ;
    editId!=null ?  setUyeler(uyeler) :uyeler=uyeler ;

    console.log("222222222222",data,yeniuye,uyeler)
    
    setUye(emptyData);
     setEditId(null);
}
    
    return (
    <form onSubmit = {handleSubmit}>

    <div>
    <label>Name:
        <input type="text" name="firstName" placeholder="isim giriniz..."  onChange={handleChange} value ={uye.firstName} />
        </label>
        <br />
        <label>Email:
        <input type="text" name="email" placeholder="email giriniz..." onChange={handleChange} value ={uye.email} />
       
        </label>
        {formStateErr.email &&(
          <>
        <br/> 
        <span>{formStateErr.email} </span>
        </>
        
         
        
        )}
        <br/>
        <label>Şifre:
        <input type="text" name="password" placeholder="soyisim giriniz..." onChange={handleChange} value ={uye.lastName} />
        </label>
        <br />

        <label>Position:
        <input type="text" name="position" placeholder="pozisyon giriniz..." onChange={handleChange} value ={uye.position} />
        </label>
        <br />

        <label>Kullanım Koşulları
        <input type="checkbox" name="terms" onChange={handleChange1} value ={uye.terms} />
       
      </label> 
      <br />

        <button type="submit" disabled={valid} onChange={()=>setEditId(null)}>
            Gönder 
        </button>
    </div>
</form>


    )
}
