import utilStyles from '../styles/utils.module.css'
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

const HeroSection = () => {
    const handlePrimaryBtnClick = () => {
        alert("Clicked primary");
    };

    const handleSecondaryBtnClick = () => {
        alert("Clicked secondary");
    };

    return (
      <section className="">
        <h1 className={utilStyles.heading2Xl}>
            We match <span style={{fontWeight: 'bold', display: 'inline'}}>IT</span> talent 
            with <span style={{fontWeight: 'bold'}}>IT</span> startups & founders
        </h1>
       <PrimaryButton text="Find a Job" onClick={handlePrimaryBtnClick} />
       <SecondaryButton text="Post a Job" onClick={handleSecondaryBtnClick} />
        <p>
            What you can look forward to as a startup employee in Italy:
        </p>
        <section>
          <div className="USPs">
            <p>
            New and returning residents are eligible for a 70% tax break via
            “Rientro dei cervelli” dell’art. 5 del D.L. n. 34/2019
            </p>
          </div>
          <div className="USPs">
            <p>
            58 Unesco World Heritage sites and up to 300 🌞 days per year. 
            Remote work has never looked so good!
            </p>
          </div>
          <div className="USPs">
            <p>
            A budget of €200M 💸allocated to Italian startups, 
            backed by the Ministry of Economic Development. 
            </p>
          </div>
        </section>
      </section>
    );
  };
  
  export default HeroSection;
  