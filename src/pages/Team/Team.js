import "./team.scss";
import Paul from "../../assets/images/paul.png";

function Team(){

    return (
      <>
        <section className="team">
          <div className="team__hero">
            <h1 className="team__hero-title">Who We Are</h1>
          </div>
          <p className="team__hero-text">
            At Seeds of Empowerment, we believe that education is a human right
            for all. We are a team of dedicated volunteers and leaders committed
            to implementing Seeds of Empowerment programs to bring access and
            quality of learning for the world’s hardest to reach.
            <br />
            <br />
            Working together from across 25 countries, our team leverages our
            skills and our shared passion to make a difference in the lives of
            underserved communities around the world.
          </p>

          <div className="team__founder">
            <h1 className="team__founder-title">Meet Our Founder</h1>
            <div className="team__founder-wrap">
              <img className="team__founder-img" src={Paul} alt="paul" />
              <p className="team__founder-name">Dr. Paul Kim</p>
            </div>
            <p className="team__founder-info">
              Dr. Paul Kim is the Chief Technology Officer and Associate Dean of
              the Stanford Graduate School of Education since 2001. As an
              education technology entrepreneur, Paul leads initiatives
              involving the design of learning technologies, educational
              research, and community development. In 2009, Paul founded Seeds
              of Empowerment, as a non-profit global education incubator for
              social innovations leveraging mobile technologies.
            </p>
          </div>

          <div className="team__executiveWrap">
            <div className="team__executive">
              <h1 className="team__executive-title">Executive Team</h1>
              <p className="team__executive-name">Daisy Zhang</p>
              <p className="team__executive-name-title">
                Chief Executive Officer
              </p>
              <p className="team__executive-info">
                Daisy Zhang is currently responsible for international
                communication and cooperation of Seeds of Empowerment. She has
                been to more than 20 countries and has had long-term study and
                living experience in Asia, Europe, and North America. After
                studying in China and Finland, she obtained a degree in Master
                of Public Administration. She used to work in the Chinese
                government research department, engaged in regional industrial
                planning and socio-economic studies. She also worked as a
                tech-journalist in Silicon Valley and Vancouver, focusing on the
                EdTech industry and exploring technologies that will help
                promote education reformation and development in the 21st
                century. After joining Seeds of empowerment, she is deeply
                inspired by the vision of SoE, and working to spread SoE’s
                educational concepts and technologies to more regions around the
                world and benefit more learners.
              </p>
            </div>
            <div className="team__executive">
              <p className="team__executive-name">Krishna Bian</p>
              <p className="team__executive-name-title">Director of 1001 Stories China</p>
              <p className="team__executive-info">
                Krishna used to focus on youth and family excursions in Beijing,
                China. He has led thousands of families participated in camping,
                hiking, biking, and nature education programs. He has taken
                students to hike Mount Annapurna in Nepal, in-depth experience
                the human and natural charm of New Zealand, and learn the
                culture of nature education in Japan. He is now working on
                nature education in Tengchong, Yunnan, China. After joining
                Seeds of empowerment, he leads the 1001 Stories project in
                China, letting the children of Beihai Township in Tengchong,
                Yunnan, and local university student volunteers to spread the
                word about their work.
              </p>
            </div>
          </div>
        </section>
      </>
    );
}

export default Team;
