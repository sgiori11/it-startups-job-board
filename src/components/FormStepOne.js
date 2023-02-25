import styles from '../styles/Form.module.css';

export default function FormStepOne() {
    return(
     <div>
        <div>
        <span>
          <label htmlFor="job-title">Job title:</label>
          <input type="text" id="job-title" name="job-title"/>
        </span>
        <span>
          <label htmlFor="company-name">Company name:</label>
          <input type="text" id="company-name" name="company-name" />
        </span>
       </div>
       <div>
        <span>
          <label htmlFor="contract">Contract type:</label>
          <input type="text" id="contract" name="contract-type" />
        </span>
        <span>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />
        </span>
      </div>
      <div>
         <label htmlFor="job-desc">Job description:</label>
         <textarea id="job-desc" name="job-desc" ></textarea>
      </div>
      <div>
        <label htmlFor="logo">Company logo:</label>
        <input type="file" id="logo" name="company-logo" accept=".jpg, .png" />
      </div>
    </div>
    )
};