import Head from '../components/LogHeader/LogHeader'
import '../css/LogEntry.css'

import { useForm } from 'react-hook-form';

function LogEntry(){
    const { register, 
        handleSubmit, 
        formState: { errors }, 
        reset } 
        = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Here you would typically send the data to your backend
    alert('Log entry saved successfully!');
    reset();
  };

    return(
        <>
        <Head />
        <div className="log-entry-container">
            <div className="word">
                <p className="log-title">Log Entry</p>
                <p className="subtitle">Log your entry here to record your progress</p>
            </div>

            <div className="log-entry-form">
            <form action="" onSubmit={handleSubmit(onSubmit)}>

                    {/* Steps */}
          <div className="form-group">
            <label className="form-label">Steps</label>
            <div className="input-row">
              <input
                type="number"
                placeholder="Enter no. of steps"
                className="form-input"
                {...register('steps', { 
                  required: 'Steps is required',
                  min: { value: 0, message: 'Steps must be positive' }
                })}
              />
              <input
                type="date"
                className="form-input date-input"
                {...register('stepsDate', { required: 'Date is required' })}
              />
            </div>
            {errors.steps && <span className="error-message">{errors.steps.message}</span>}
          </div>

          {/* Weight */}
          <div className="form-group">
            <label className="form-label">Weight</label>
            <div className="input-row">
              <input
                type="number"
                step="0.1"
                placeholder="Enter targeted weight"
                className="form-input"
                {...register('weight', { 
                  required: 'Weight is required',
                  min: { value: 0, message: 'Weight must be positive' }
                })}
              />
              <input
                type="date"
                className="form-input date-input"
                {...register('weightDate', { required: 'Date is required' })}
              />
            </div>
            {errors.weight && <span className="error-message">{errors.weight.message}</span>}
          </div>

          {/* Blood Pressure */}
          <div className="form-group">
            <label className="form-label">Blood Pressure</label>
            <div className="input-row">
              <input
                type="text"
                placeholder="Enter targeted BP"
                className="form-input"
                {...register('bloodPressure', { 
                  required: 'Blood pressure is required',
                  pattern: {
                    value: /^\d{2,3}\/\d{2,3}$/,
                    message: 'Format: 120/80'
                  }
                })}
              />
              <input
                type="date"
                className="form-input date-input"
                {...register('bloodPressureDate', { required: 'Date is required' })}
              />
            </div>
            {errors.bloodPressure && <span className="error-message">{errors.bloodPressure.message}</span>}
          </div>

          {/* Glucose Level */}
          <div className="form-group">
            <label className="form-label">Glucose Level</label>
            <div className="input-row">
              <input
                type="number"
                step="0.1"
                placeholder="Enter GL"
                className="form-input"
                {...register('glucoseLevel', { 
                  required: 'Glucose level is required',
                  min: { value: 0, message: 'Glucose level must be positive' }
                })}
              />
              <input
                type="date"
                className="form-input date-input"
                {...register('glucoseLevelDate', { required: 'Date is required' })}
              />
            </div>
            {errors.glucoseLevel && <span className="error-message">{errors.glucoseLevel.message}</span>}
          </div>

           {/* Water Intake */}
          <div className="form-group">
            <label className="form-label">Water Intake</label>
            <div className="input-row">
              <input
                type="number"
                step="0.1"
                placeholder="Enter targeted Ounce"
                className="form-input"
                {...register('waterIntake', { 
                  required: 'Water intake is required',
                  min: { value: 0, message: 'Water intake must be positive' }
                })}
              />
              <input
                type="date"
                className="form-input date-input"
                {...register('waterIntakeDate', { required: 'Date is required' })}
              />
            </div>
            {errors.waterIntake && <span className="error-message">{errors.waterIntake.message}</span>}
          </div>

          {/* Carbohydrate */}
          <div className="form-group">
            <label className="form-label">Carbohydrate</label>
            <div className="input-row">
              <input
                type="number"
                step="0.1"
                placeholder="Enter targeted Carb intake"
                className="form-input"
                {...register('carbohydrate', { 
                  required: 'Carbohydrate intake is required',
                  min: { value: 0, message: 'Carbohydrate must be positive' }
                })}
              />
              <input
                type="date"
                className="form-input date-input"
                {...register('carbohydrateDate', { required: 'Date is required' })}
              />
            </div>
            {errors.carbohydrate && <span className="error-message">{errors.carbohydrate.message}</span>}
          </div>

          

        {/* Add Notes */}
          <div className="form-group">
            <label className="form-label">Add Notes (optional)</label>
            <textarea
              placeholder="Enter any additional notes..."
              className="form-textarea"
              rows="4"
              {...register('notes')}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="save-button">
            Save
          </button>

          </form>
        </div>

        </div>
        </>
    )
    
}
export default LogEntry;