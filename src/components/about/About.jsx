import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Pour moi</h1>
        <p className="a-sub">
        Je suis un étudiant au 4ème année filière génie informatique à l'université mohamed premièr école
         nationale des sciences appliquées Oujda. 
        J'ai 22 ans et l'année dernière j'ai passé un stage chez l'entreprise LAMBDASOFT à Casablanca.
        </p>
        
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">La technologie utilisée pour développer ce projet.</h4>
            <p className="a-award-desc">
            Ce est réalisé avec la bibliothèque de JavaScript react js.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
