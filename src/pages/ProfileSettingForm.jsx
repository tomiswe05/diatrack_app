import '../css/ProfileSettings.css';
import Head from '../components/profile-settings/head';
import { useForm } from 'react-hook-form';
function ProfileSettingForm() {
   
    const {
    register,        // to register form inputs
    handleSubmit,    // to handle form submission
    formState: { errors },
    reset            // to reset the form
  } = useForm();

   

 const onSubmit = (data) => {
  const processedData = {
    ...data,
    targetSugar: parseInt(data.targetSugar, 10),
    targetPressure: parseInt(data.targetPressure, 10),
  };

  console.log(processedData); // use processed data here
  console.log(processedData.dob);

  reset();
};
    return(
        <>
        <div className="profile-formContain">
            <Head />

        <div className="profile-form">
            <form action="" onSubmit={handleSubmit(onSubmit)} >
            <div className='form-contain'>
                {/*Form Section 1*/}
                <div className="section1">
                    <label htmlFor=""> 
                        {errors.username ?<span className='err'>{errors.username.message}</span> : 'Username'}
                    </label>
                    <input type="text" className="form-box" placeholder='Enter Username'
                    {...register('username', { required: 'Username is required' })} /> <br />
                    

                    <label htmlFor="">{errors.dob ?<span className='err'>{errors.dob.message}</span> : 'Date of Birth'}</label>
                    <input type="date"  className="form-box" placeholder='Select Date'
                    {...register('dob', { required: 'Date of Birth is required' })} 
                    /> <br />
                    

                    <label htmlFor="">{errors.genotype ?<span className='err'>{errors.genotype.message}</span> : 'Genotype'}</label>
                    <select
                        {...register("genotype", { required: "Genotype is required" })}
                       id="geno"
                       className="form-box">
                            <option value="">Select Genotype</option>
                            <option value="AA">AA</option>
                            <option value="AS">AS</option>
                            <option value="SS">SS</option>
                    </select> <br />

                    <label htmlFor="">{errors.diabetesType ?<span className='err'>{errors.diabetesType.message}</span> : 'Diabetes Type'}</label>
                    <select className="form-box" id="geno"
                     {...register("diabetesType", { required: "Diabetes Type is required" })}
                    >
                       <option value="">Select diabetes type</option>
                       <option value="type1">Type 1 </option>
                       <option value="type2">Type 2 </option>
                       <option value="gestational">Gestational </option>
                       <option value="prediabetes">Prediabetes</option>
                       <option value="other">Other</option>
                   </select>
                     <br />

                    <label htmlFor="">{errors.bloodGroup ?<span className='err'>{errors.bloodGroup.message}</span> : 'Blood Group'}</label>
                    <select className="form-box" id="geno"
                     {...register("bloodGroup", { required: "Blood Group is required" })}>
                       <option value="">Select blood group</option>
                       <option value="A+">A+</option>
                       <option value="A-">A−</option>
                       <option value="B+">B+</option>
                       <option value="B-">B−</option>
                       <option value="AB+">AB+</option>
                       <option value="AB-">AB−</option>
                       <option value="O+">O+</option>
                      <option value="O-">O−</option>
                   </select>

                     <br />
                </div>

                {/*Form Section 2*/}
                <div className="section2">
                    <label htmlFor="">{errors.targetSugar ?<span className='err'>{errors.targetSugar.message}</span> : 'Target Blood Sugar'}</label>
                    <input type="text" className="form-box" placeholder='70-180 mg/dL'
                    {...register("targetSugar",  { required: "This Field is required" })}
                    /> <br />

                    <label htmlFor="">{errors.targetPressure ?<span className='err'>{errors.targetPressure.message}</span> : 'Target Blood Pressure'}</label>
                    <input type="text" className="form-box" placeholder='120/80 mmHg'
                    {...register("targetPressure", { required: "This Field is required" })}
                    /> <br />

                    <label htmlFor="">{errors.email ?<span className='err'>{errors.email.message}</span> : 'Email'}</label>
                    <input type="email" className="form-box"
                    {...register("email",
                        {
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email format"
                          }
                        })
                    }
                    />  <br />

                    <label htmlFor="">Gender</label>
                    <input type="text" className="form-box" placeholder='F or M'
                     {...register("gender", { required: "Gender is required" })}
                    /> <br />

                    <label htmlFor="">Profile Photo</label>
                    <input type="file" 
                    {...register("photo")}
                    /> <br />
                </div>
            </div>

            <div className='profileBtn'>
                <button type='text'> Save Changes</button>
            </div>
            </form>
        </div>

        </div>
        </>
    )
}

export default ProfileSettingForm;
