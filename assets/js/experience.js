AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Senior Full Stack Developer",
    cardImage: "assets/images/experience-page/111.webp",
    place: "Nutech Advisor",
    time: "(July, 2022 - present)",
    desp: "<li>Convert Figma to responsive 3D mobile/website UI.</li> <li>Real time update for UX, UI view of the application.</li> <li>Design and develop custom swap forking PancakeSwap.</li>",
  },
  {
    title: "Frontend & Blockchain Developer",
    cardImage: "assets/images/experience-page/222.webp",
    place: "Clam Island",
    time: "(Mar - Aug, 2022)",
    desp: "<li>Convert Figma to responsive 3D mobile/website UI.</li> <li>Real time update for UX, UI view of the application.</li> <li>Design and develop custom swap forking PancakeSwap.</li>",
  },
  {
    title: "Blockchain Developer",
    cardImage: "assets/images/experience-page/333.webp",
    place: "DearMonsters",
    time: "(Nov - Dec, 2021)",
    desp: "<li>Developed smart contract using Solidity and deployed on BSC.</li><li>Created a protocol lies at the crossroads between DeFi, gaming and the Metaverse.</li><></li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
  {
    title: "Frontend Web Developer",
    cardImage: "assets/images/experience-page/444.webp",
    place: "YakChat",
    time: "(Aug, 2021 - Dec, 2021)",
    desp: "<li>Developed React components from Figma file with supporting Pixel Perfect.</li> <li>Maintain the whole system using React, React Native, Redux</li> ",
  },
  {
    title: "Full-stack Developer",
    cardImage: "assets/images/experience-page/555.webp",
    place: "M1neral",
    time: "(Feb - Apr, 2021)",
    desp: "<li>Conduct day-to-day project coordination.</li><li>Worked on Extension Activity Monitor which is a privileged extension for Firefox that uses the activityLog API (privileged API) to monitor the activities of the other installed extensions.</li><li>The activityLog API listens for logs from other installed extensions.</li>",
  },
  {
    title: "Frontend Developer",
    cardImage: "assets/images/experience-page/666.webp",
    place: "Upwork",
    time: "(Nov, 15 - Jan, 20)",
    desp: "<li>Maintained 20+ websites and optimized 40+ websites for maximum speed and scalability.</li><li>Designed and Developed UI designs for over 15 clients using CSS, HTML, Sass, Vue, React.</li><li>Utilized HTML, CSS, and JavaScript, TypeScript, Bootstrap to create 90+ responsive landing pages.</li>",
  },
  {
    title: "Full-stack Developer",
    cardImage: "assets/images/experience-page/777.webp",
    place: "CRMGrow",
    time: "(Dec, 14 - June, 16)",
    desp: "<li>Developed this site for 3 years from scratch with MEAN stack.</li><li>Managed the projects including designing responsive UI, integrating with Backend with API, and making logic in the backend side.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "HackerRank",
    cardImage: "assets/images/experience-page/hacker_js.webp",
    description:
      "JavaScript",
    url: "https://www.hackerrank.com/certificates/1d20387fa74b"
  },
  {
    title: "HackerRank",
    cardImage: "assets/images/experience-page/hacker_react.webp",
    description:
      "React",
      url: "https://www.hackerrank.com/certificates/b7e5141a4379"
  },
  {
    title: "HackerRank",
    cardImage: "assets/images/experience-page/hacker_css.webp",
    description:
      "CSS",
      url: "https://www.hackerrank.com/certificates/ac2d8c948fdb "
  },
  {
    title: "HackerRank",
    cardImage: "assets/images/experience-page/hacker_api.webp",
    description:
      "Rest API",
      url:"https://www.hackerrank.com/certificates/ae65195ac2b2 "
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description, url}) =>
      (output += `        
      <a href="${url}" target="_blank" rel="author">
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 450px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      </a>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.webp",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.webp",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.webp",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.webp",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.webp",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.webp",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.webp",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.webp",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.webp",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.webp",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.webp",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.webp",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.webp",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.webp",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.webp",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
