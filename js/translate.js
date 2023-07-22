var createCookie = function (name, value) {
  document.cookie = name + "=" + value + ";";
};

function getCookie(c_name) {
  if (document.cookie.length > 0) {
    c_start = document.cookie.indexOf(c_name + "=");
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1;
      c_end = document.cookie.indexOf(";", c_start);
      if (c_end == -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return false;
}

if (getCookie("lang")) {
  if (getCookie("lang") == "GR") translateGR();
  else translateEN();
} else {
  translateGR();
}

function setText(id, text) {
  var v = document.getElementById(id);
  if (v != null) {
    v.innerHTML = text;
  }
}

function translateEN() {
  /* Nav Bar */
  setText("home", "home");
  setText("about", "About Us");
  setText("work", "Our work");
  setText("board", "Our board");
  setText("partners", "Our Partners");
  setText("contact", "Contact Us");

  /* Index */
  setText("about0", "About Us");
  setText("work1", "Our work");
  setText("contact0", "Contact Us");
  setText("about1", "What is EESTEC");
  setText(
    "about2",
    "Electrical Engineering STudents’ European Association (EESTEC) is a non-political, non-governmental and non-profit organization which targets and trains through its activities students from electrical profile Universities, Institutes and Technical Schools in Europe."
  );
  setText(
    "about3",
    "EESTEC’s main goal is to promote, establish and develop international contacts and an exchange of ideas between students. Our main mission is to develop the quality of our members and help them through their career path both in academic and industrial aspects."
  );
  setText("about4", "About LC Xanthi");
  setText(
    "about5",
    "LC Xanthi is a Local Commitment of the above organization with more than 60 active members, students of the Democritus University of Thrace. Although it was founded in 2010, it has become one of the most active student organizations in Thrace, with frequent activities and many active members on both a local and international level."
  );

  setText("stats", "EESTEC IN NUMBERS");
  setText("stats1", "Members");
  setText("stats2", "Countries");
  setText("stats3", "Commitments");

  setText("board1", "MEET OUR BOARD");
  setText("chair", "Ioannis <br> Tampakis");
  setText("chair1", "Chairperson");
  setText("vcia", "Anastasios<br> Taxtatzis");
  setText("vcia1", "VC of Internal Affairs");
  setText("vcea", "Eleonora<br> Makridou");
  setText("vcea1", "VC of External Affairs");
  setText("treasurer", "Christina<br> Ntali");
  setText("treasurer1", "Treasurer");
  setText("cp", "Nikolaos<br> Poulios");
  setText("cp1", "Contact Person");
  setText("past_boards", "Past Boards");

  setText("partners1", "Community Partners");
  setText("partners2", "Supporters");
  setText("partners3", "BECOME A PARTNER");
  setText(
    "partners4",
    "EESTEC offers a great opportunity to promote your company or your services among future engineers around Europe. LC Xanthi has a great impact on the student community and its members are among the most active engineering students in Xanthi. You can gain access to many ambitious, talented students through our activities that may become your future partners. It will undoubtedly increase recognition and visibility of your company among them. "
  );
  setText(
    "partners5",
    "If you are interested to become our partner please contact us to <a href='mailto:eestecfrxanthi@gmail.com' target='_top'>eestecfrxanthi@gmail.com</a> ."
  );
  setText("partners6", "Our partners");
  setText("partners7", "Platinum Sponsor");
  setText("partners8", "Main Sponsors");
  setText("partners9", "Supporters");
  setText("partners10", "Under the Auspices");
  setText("partners11", "Platinum Sponsors");
  setText("partners12", "Gold Sponsors");
  setText("partners13", "Sponsors");

  setText("contact1", "Tsimiski 58<br>Xanthi, Greece, 67100");
  setText("contact2", "Contact Form");

  setText("other_projects", "Other Projects");

  /* International */
  setText("about_1", "Which are the official EESTEC International Events?");
  setText(
    "about_2",
    "There are five types of official events in EESTEC: exchanges, workshops, advanced skills workshops, exclusive events, Congresses and operational events. During events, EESTECers have the opportunity to explore different cultures, learn, socialize and travel."
  );
  setText("about_3", "What about LC Xanthi?");
  setText(
    "about_4",
    "In LC Xanthi we had the opportunity to organize 3 kinds of events. Mostly International Workshops but also BOMs and an Exchange."
  );

  setText("workshop_about_1", "What is an EESTEC International Workshop?");
  setText(
    "workshop_about_2",
    "One of the events organized by an Organizing Committee (OC) is a workshop. The workshop consists of academic lectures and various activities organized by the OC. There are certain criteria that must be respected regarding the lectures: they must be in English and must not be less than 15 hours. The academic activities can be classroom lectures, practical exercises, laboratory work or technical trips. The topics of the educational seminars are usually based on technology in Electrical and Electronic Engineering, Computer Science, Soft Skills or Economics. Besides the academic part, the workshops held by EESTEC Committees are combined with social activities."
  );
  setText(
    "machiners_1",
    "In December 2019, the Local Committee of Xanthi organized the 6th International Workshop on: Introduction to Mechanical Learning and the Applications of Artificial Intelligence."
  );
  setText(
    "machiners_2",
    "The participants initially attended introductory lectures in Machine Learning theory. In particular, they saw examples of machine learning applications, how to prepare data before processing, and some basic algorithms in processing this data. A tour of the Athena Research Center followed, with the aim of presenting the technologies used in their work, and lectures on the types of Machine Learning and neural networks. The participants were, however, given the opportunity to put into practice what they saw with introductory workshops in Python and classification examples. The Workshop closed with lectures on some applications of Artificial Intelligence in Medicine and Robotics."
  );
  setText(
    "blinders_1",
    "'3D Blinders', this year's international workshop, organized by the local committee of Xanthi was about the use of remote control systems in the operation of a three-dimensional printer."
  );
  setText(
    "blinders_2",
    "Through the respective seminars, the participants had the opportunity to assemble such a printer from the outset and then proceed with its proper calibration. Wireless control of the printer via wi-fi was achieved by using the Raspberry Pi board that allowed remote commands to be sent. In addition, a feedback system was implemented to optimize remote control in order to verify that the given orders were executed correctly."
  );
  setText(
    "brewing_1",
    "A truly original application of Industrial Automation in the brewing sector was the subject of this particular event."
  );
  setText(
    "brewing_2",
    "On the one hand, the participants were familiarized themselves with the ever-evolving industry of Industrial Automation and on the other hand they were initiated into the beer production process with the aim of constructing a heating-cooling system to achieve the optimum stable temperature for the fermentation. The usefulness of this system in brewing is noteworthy as it makes it possible to produce beer throughout the year, as opposed to the conventional fermentation process carried out only in spring due to the limitations imposed by the outside temperature. The familiarization of the participants with the subject of the workshop took place through lectures by experts as well as experiential contact. The final results were also presented in the form of a chart for the better understanding of the process followed."
  );
  setText(
    "hoa_1",
    "The House of Apps dealt with one of the many applications of the Internet of Things in home appliances used in a “Smart House”."
  );
  setText(
    "hoa_2",
    "The main advantage of “Smart House” technology is the ability it gives to its user to monitor and manage all the premises and facilities of a home in any way of communication, such as lighting control through the use of automation. Participants gained knowledge of this technology by building applications that allowed them to control electronic devices. Furthermore, at the end of the workshop, they had the opportunity to try these applications in practice at a local residence."
  );
  setText(
    "planb_1",
    "Internet security and the dangers faced by its users, a key issue in modern technological culture, have been the inspiration for the international workshop 'Plan B: Hack the system'."
  );
  setText(
    "planb_2",
    "During the event, participants gained insight of tools that allowed them to detect weaknesses in computer systems as well as how such a system could be compromised. In fact, they had the opportunity to test their knowledge mastered through practical exercise in the form of a contest at the end of the workshop."
  );
  setText(
    "rock_1",
    "“Rock the Bit” was the first international workshop organized by the newly founded local committee of Xanthi. The purpose of the workshop was to familiarize the participants with the Arduino platform and how it could be used to create musical instruments."
  );
  setText(
    "rock_2",
    "In particular, the participants gained basic knowledge and skills to handle this platform in an original and entertaining way. They were divided into groups, each of which had undertaken the creation of a specific musical instrument, such as drums, through the use of Arduino. Within the framework of the event, an educational trip to a modern farm of cows took place, where the milking is done using automations."
  );

  setText("exchange_about_1", "What is an EESTEC International Exchange?");
  setText(
    "exchange_about_2",
    "A type of official EESTEC event. The characteristic of exchanges is the lack of an academic part, although sometimes soft skills trainings are organized. The purpose of an exchange is to get to know the city and culture and to have fun. Various entertaining activities, depending on the season, are what make exchanges so popular among EESTECers. An exchange is one of the types of events where a participation fee might be included."
  );
  setText(
    "aqua_1",
    "During June of 2015, LC Xanthis evented a summer exchange named “Aquaholics”, which took place in the island of Thasos, Greece. This event lasted five days and participants were able to gain extraordinary experiences and have lot of fun. Espiacially, some of the activities that were provided there, were hiking, water sports, exploring the numerous beaches of Thasos and tasting greek traditional dishes. The aim of this event was to create strong bonds between the participants despite of the cultural differences."
  );
  setText(
    "aqua_2",
    "Especially, some of the activities that were provided there, were hiking, water sports, exploring the numerous beaches of Thasos and tasting greek traditional dishes. The aim of this event was to create strong bonds between the participants despite of the cultural differences."
  );

  setText("boms_about_1", "What are EESTEC Board Meetings (BOMs)?");
  setText(
    "boms_about_2",
    "As the Board of EESTEC may consist of people from different countries, most of their meetings are online. However, due to the importance of the descisions the Board must take, live meetings are taking place throughout their mandate."
  );
  setText(
    "boms_about_3",
    "In LC Xanthi we are always willing to contribute to EESTEC Internationally. That is the main reason we have hosted 2 BOMs throughout the years, a HOBOM in 2015 and a WiBOM in 2018."
  );
  setText("wibom_1", "What is a WiBOM?");
  setText(
    "wibom_2",
    "It is a general meeting held by a committee for the International Board during winter. The board discusses the general situation of the association by that time and takes decisions for rest of the year."
  );
  setText("wibom_3", "WiBOM 2018 in Xanthi");
  setText(
    "wibom_4",
    "In February LC Xanthi held the Winter International Board Meeting (WiBOM). More specifically, the 5 members of the International Board chose a local committee, in this case our LC, to meet up. That week, the strategy plan was finalized, which is the plan that eestec will follow for the next 5 years, and many important descisions were made regarding EESTEC."
  );
  setText("hobom_1", "What is a HOBOM?");
  setText(
    "hobom_2",
    "The HOBOM is the first meeting of the EESTEC Board after their election in Spring Congress. It can be organized by any EESTEC Committee, which provides the accommodation, food and working space. The HOBOM is attended by the new Board, the previous Board, and the new Oversight Committee. During HOBOM, the previous Board provides the Handover to the new Board and the new Board has time to bond and spend some quality time together for the first time. The HOBOM is necessary for all Boards of EESTEC."
  );
  setText("hobom_3", "HOBOM 2015 in Xanthi");
  setText(
    "hobom_4",
    "In 2015 LC Xanthi hosted the HOBOM, where the Board of EESTEC and the Board-Elect met, set the annual goals and made crucial descisions for the future of our Association."
  );

  /* SSA */
  setText("ssa_about", "What is SSA");
  setText(
    "ssa_about1",
    "It is an international project of EESTEC which is implemented all over Europe. The main objective of the project is to give students the opportunity to improve their personal and professional skills which will have a positive impact on their self-awareness and self-confidence. During the Academy students have a chance to develop skills such as leadership, teamwork, presentation and communication skills, emotional intelligence and other related topics."
  );
  setText("ssa_about2", "SSA in Xanthi");
  setText(
    "ssa_about3",
    "LC Xanthi has a strong tradition in soft skills developement, having organized 2 SSAs in the past years. We will continue to organize SSA as an open project for EESTEC and non-EESTEC members."
  );
  setText(
    "ssa_1",
    "On November 2016 and for the first time, LC Xanthi organized an SSA in order to raise the awareness about the importance of soft skills in the working field throughout students. The 2-day seminar focused on two soft skills categories, Leadership and Self Development. In the Leadership session the participants practiced their Communication skills and learned about the importance of delegation and motivation in a leader. In the Self Development session they focused on skills such as Self Confidence, Personal Branding and Emotional Intelligence. Each one of the two training sessions lasted about 4 hours and were delivered by EESTEC Trainers."
  );
  setText(
    "ssa_2",
    "SSA 2 was the second edition of SSA LC Xanthi organized, and it took place in October 2017. The goal was to raise the awareness about the importance of soft skills in the working field throughout the student community. The 2-day seminar focused on the main soft skills category, Self Development. The two sub-sessions were about Habits Of Highly Effective People and Feedback & Strokes. Each one of the two training sessions lasted about 8 hours (4 hours per day) and were delivered by EESTEC Trainers."
  );
  setText(
    "ssa_3",
    "SSA 3 was the third edition of SSA LC Xanthi organized, and it took place in November 2019. The goal again was to raise the awareness about the importance of Soft Skills throughout the student community. The 2-day seminar focused on two main soft skills categories, Self Development and Team Management. The training sessions were delivered by EESTEC Trainers in collaboration with trainers from other organizations, in Greek and English."
  );
  setText(
    "ssa_4",
    "SSA 4 was the fourth edition of SSA LC Xanthi organized, and it took place in November 2019. The goal again was to raise the awareness about the importance of Soft Skills throughout the student community. The 2-day seminar focused on two main soft skills categories, Self Development and Team Management. The training sessions were delivered by 7 EESTEC Trainers in collaboration with 1 trainer from other organization. The training sessions were in English (2) and Greek (2)."
  );
  setText(
    "ssa_5",
    "EESTEC LC XANTHI with the experience of the remaining four years decided to organize the SSA 5 but, online this time. The event will take place on November 28 and 29 with the theme 'Living and Working During the Pandemic'. The trainings will consist of 2 parts. Each part will last about 2-2.5 hours. The aim of the trainings is to develop the skills that will help the participants in the time of the pandemic."
  );

  /* CareerDay */
  setText("career_1", "What is Career Day?");
  setText(
    "career_2",
    "Career Day is a local event organized by LC Xanthi for the last 3 years. The main goal of this event is to connect the students with the job market, inform them about the job requiremnts today and help them improve their network. It has proved to be a very successful initiative by EESTEC LC Xanthi and it continues to improve every year."
  );
  setText(
    "career_3",
    "In April of 2018, our LC organized, for the third consecutive year, the Career Day. The purpose of this event was to inform students about the demands of employers and to and to give them an insight of the field of work. Most of the speakers that were present at this event, were corporate representatives, and gave the students information about what to do when trying to find a job. "
  );
  setText(
    "career_4",
    "More specifically, one of our speakers was Dimitris Tselios, Life and Career Coach, with his speech 'Attitude is everything', who explained to us how important human investment is in our personal development and what are its benefits both on and off the workfield. "
  );
  setText(
    "career_5",
    "The speech of Mr. Tselios, was followed by a video call from Mr. Christos Lytras with the subject 'What are you looking for in your Tech Company - What do you need to know as a founder of a tech startup before your talk to professional investors?'. "
  );
  setText(
    "career_6",
    "The event also hosted Ms. Paraskevi  Giourka with a speech titled 'Manoeuvre your skills to entrepreneurial success'. The aim of the lecture was to give practical advice on matching the skills of graduates to the real needs of the labor market in modern business!"
  );
  setText(
    "career_7",
    "Our event ended with the speech of Mr. Christos Giordamlis of Prisma Electronics 'Innovation in Greece during the Crisis - Challenges - Threats - Experiences in Prism Electronics'. "
  );
  setText(
    "career_8",
    "On May 2017, we organized the second edition of Career Day. Its goal was to inform students about the Job market at present, let them know about employers’ requirements and give them a chance to interact with companies. We were happy to host two students from our faculty who started their own project, a startup, with an app really popular among Xanthi’s student community."
  );
  setText(
    "career_9",
    "After that, a speech from a CERTH representative followed. CERTH is one of the most well known research centers of Greece and its considered to be among the top 20 research and education entities at taking up competitive EU programs."
  );
  setText(
    "career_10",
    "Our event also hosted a representative of ENA Consultants, who tried to answer any questions students had about creating your own company in Greece."
  );
  setText(
    "career_11",
    "Our event ended with POWERFOR, the biggest industrial intermediary in the energy sector and also the owner of Solar Beer Xanthi, a small local brewery which uses solar panels to conserve energy and make beer."
  );
  setText(
    "career_12",
    "On November 2016, EESTEC LC Xanthi organized Career Day for the first time. The goal was to create a link between students and companies through speeches and networking."
  );
  setText(
    "career_13",
    "Our first guest was <a href='https://speakt.com'>Speakt</a>, successful startup based in London, which uses a web application to offer professional translation solution. They spoke about how you can found a startup and make your idea work."
  );
  setText(
    "career_14",
    "After that, egg followed, a consulting team who offers support to businesses and helps new businesses grow. 100mentors, a consulting company, was also there to offer their advices."
  );
  setText(
    "career_15",
    "Next was More than (just) Themes, a software developing company. It was founded on May 2011 and grew up to be one of the most well known companies in the Durpal community, offering more than 20 Premium Durpal Themes."
  );
  setText(
    "career_16",
    "Our event came to an end with the speeches of Tesibit, a company on the field of renewable energy, and Grecruitment, a company which offers interview simulations in order to help University graduates familiarize with the process and also find work abroad."
  );

  /* EC */
  setText("ec_1", "What is EESTech Challenge?");
  setText(
    "ec_2",
    "It’s an EESTEC International project-competition which is open to students from cities where Local Rounds will take place. The focus and the topic of the competition is choosed annually. The topic for 2016/17 was Machine Learning and for 2017/18 Big Data. The competition consists of Local Rounds (LRs) and the Final Round. Local Rounds can have two approaches of the implementation:<br>• An online round - The task solutions would be submitted online to the website platform provided by EESTEC International<br>• A live round - Committees can organise a live solving of the task in a fixed time slot.<br>"
  );
  setText(
    "ec_3",
    "The judges for LRs should be company representatives and professors. Winners of Local Rounds will pass to the Final Round, where they will compete with their colleagues from other LCs for the winner of the competition by resolving the final task given by the company sponsor(s).<br>Timeline:<br>• Q&A Sessions<br>• LC Applications<br>• Call for OC of Local Rounds<br>• Webinars<br>• Local Rounds<br>• Final Round<br>"
  );
  setText(
    "ec_4",
    "There are also ambassadors representing every LC of EESTEC, who promote EC on local level."
  );
  setText("ec_5", "EESTech Challenge in Xanthi");
  setText(
    "ec_6",
    "LC Xanthi has organized its first local round on March 2018."
  );

  /* Seminars & Workshops */
  setText(
    "des_19_2",
    "Η EESTEC LC Xanthi διοργανώνει στις 31/5 & 1/6 διήμερο hands-on workshop πάνω στο 3D Printing και το 3D Design. Το workshop θα αποτελείται από δύο μέρη. Την πρώτη μέρα οι συμμετέχοντες θα έρθουν σε επαφή με το αντικέιμενο του 3D Printing, τις βασικές αρχές του και στην συνέχεια θα γίνει μια εισαγωγή στα βασικά του 3D Design έτσι ώστε όλοι να είναι σε θέση να σχεδιάσουν ένα 3D αντικείμενο προς εκτύπωση. Την δέυτερη μέρα θα συνεχιστεί το design, θα γίνουν οι εκτυπώσεις των αντικειμένων που σχεδιάστηκαν και θα μάθουμε πως ένας οικονομικός 3D εκτυπωτής μπορεί να γίνει λειτουργικός και εύκολος στην χρήση απο όλους."
  );
  setText(
    "des_18_1",
    "How Robotics and Artificial Intelligence are Changing our World"
  );
  setText(
    "des_18_1_2",
    "How Robotics and Artificial Intelligence are Changing our World"
  );
  setText(
    "des_18_2",
    "On the 23rd of May 2018, EESTEC LC Xanthi organized an online lecture about robotics and AI (Artificial Intelligence). Our lecture was Dr. Nikolaos Mavridis, Massachusetts Institute of Technology (MIT). He is the founder of Interactive Robots and Media Lab (IRML) and he has worked in many Education Institutes around the world."
  );
  setText(
    "des_18_3",
    "At the lecture the attendees had the opportunity to get an idea of how AI robots work and had the chance to ask questions about them from our lecturer."
  );
  setText("des_18_4", "Seminar & Workshop about Chatbots");
  setText("des_18_4_2", "Seminar & Workshop about Chatbots");
  setText(
    "des_18_5",
    "On 10th and 11th of March 2018, EESTEC LC Xanthi organized a 2-day Seminar-Workshop on Chatbots. The focus points were:<br>•  The possibilities that chatbot programming has<br>•  The drawbacks and constraints they have<br>•  Why chatbots are useful<br><br>The workshop that followed the seminar presented the techniques and technologies use can use to create a Messenger Chatbot (Connecting it with Facebook), the process of user requests and the understanding of these requests on the chatbot side. The workshop also focused on the Dialog Management part, which is the sub-system that chooses the next answer depending on the request-question the user provides. At the end the participants had the chance to create their own chatbot in NodeJS environment (Server-Side Javascript)."
  );
  setText(
    "des_18_6",
    "The lecturer was Christos Panagiotakopoulos, an undergraduate student of NTUA and an experienced member of EESTEC, who held a position in LC Athens Board in 2015-2016. He is also the IT Leader of EESTEC and the creator of the first Greek Facebook Chatbot “Πότε έρχεται το λεωφορείο μου”."
  );
  setText("des_18_7", "Idea & Risk");
  setText("des_18_7_2", "Idea & Risk");
  setText(
    "des_18_8",
    "On the 20th of January 2018, EESTEC LC Xanthi organized a seminar on entrepreneurship. The subjects were:<br>•  “An idea is worthy as the people who support it”, by Leonidas Skerletopoulos, Marketing Strategist<br>•  “Job security - The business risk of the 21st century”, by Therapon Fakas, Bussiness Consultant, Life coach and DASTA DUTH partner.<br>"
  );
  setText(
    "des_18_9",
    "Mr. Skerletopoulos talked about how a new idea in the business sector is a misunderstood term. He insisted that by sharing an idea and working with other people increases the chances of success. Statistics say that only 15% of people in business succeeded on their own ideas and ,on the other hand, 85% on ideas of other people."
  );
  setText(
    "des_18_10",
    "Mr. Fakas presented the view of how job security can be a bigger risk than most people think. “You can’t be relaxed, you have to evolve as the market evolves” was one of the things he said during his lecture."
  );
  setText(
    "des_18_11",
    "The goal of this seminar was to raise the awareness of the business sector among the students and give them a glimpse of how things works on the working field currently."
  );

  setText("des_17_1", "Setting up a Buisness in Thrace and Greece");
  setText("makeactive2s", "Setting up a Buisness in Thrace and Greece");
  setText(
    "des_17_2",
    "On May 24th 2017, EESTEC LC Xanthi organized a lecture about entrepreneurship in Thrace and Greece in general, at a time of crisis such our own.<br>The lecturer was Politopoulos Dimitris, founder of Vergina brewery, one of the biggest in Greece.<br>Whoever came to the lecture had the chance to get updated about the business situation in Greece and also on how to set up their own successful business."
  );
  setText(
    "des_17_3",
    "The lecturer was Politopoulos Dimitris, founder of Vergina brewery, one of the biggest in Greece.<br>Whoever came to the lecture had the chance to get updated about the business situation in Greece and also on how to set up their own successful business."
  );
  setText(
    "des_17_4",
    "Presentation of Postgraduate Courses from KIC InnoEnergy"
  );
  setText(
    "des_17_4_2",
    "Presentation of Postgraduate Courses from KIC InnoEnergy"
  );
  setText(
    "des_17_4_3",
    "Presentation of Postgraduate Courses from KIC InnoEnergy"
  );
  setText(
    "makeactive5s",
    "Presentation of Postgraduate Courses from KIC InnoEnergy"
  );
  setText(
    "des_17_5",
    "On the 14th of March 2017, EESTEC LC Xanthi organized a seminar on post-graduate courses by KIC InnoEnergy. KIC InnoEnergy is a company focused on the energy field and offers opportunities to the ambitious and “pioneers” to work on the energy industry and bring their ideas into life."
  );
  setText(
    "des_17_6",
    "The seminar’s goal was to inform students about the post-graduate courses that InnoEnergy Master School offers, the advantages that they offer and to give them a glimpse of future opportunities."
  );

  setText("des_16_1", "Presentation of the Patent Office in Duth");
  setText("makeactive3s", "Presentation of the Patent Office in Duth");
  setText(
    "des_16_2",
    "On the 14th of May 2016, EESTEC LC Xanthi organized a seminar to present the European Patent Office, its activities and the opportunity for work on the office.<br>The seminar would be of interest for both graduate and undergraduate students as a future opportunity."
  );
  setText(
    "des_16_3",
    "On 14 of April 2016, EESTEC LC Xanthi organized a seminar about Web Security. The lecturers were <a href='https://www.dionyziz.com/cv.html' target='_blank'>Dionisis Zindros</a>, PhD candidate of the National Technical University of Athens, who specializes on cryptography and web security and <a href='https://themicp.com/cv/' target='_blank'>Themis Papameletiou</a>, undergraduate student of the National Technical University of Athens."
  );
  setText(
    "des_16_4",
    "The seminar focused on Web Security, protocols such as HTTP/HTTPS, TSL in SQl injection code and XSS scripting. Also there was a presentation of a man-in-the-middle attack and Wireshark packages analysis."
  );
  setText(
    "des_16_5",
    "On March and April 2016, EESTEC LC Xanthi organized a 12-days series of seminars and workshops on Android Development with the title “JustApp”. In these seminars android application development techniques were presented  on platforms such as Cordova and Phonegap."
  );
  setText(
    "des_16_6",
    "During the courses the participants acquired the essential knowledge of Web Tool Development, they were introduced to AngularJS, front-end SDK and cloud storage. The courses were beginner friendly so everyone with or without any knowledge could join."
  );
  setText(
    "des_16_7",
    "On the 21st of January 2016, EESTEC LC Xanthi in cooperation with professor Pavlos Efraimidis and his research team, organized an Android Programming workshop. In the workshop terms such as Intents, User Interfaces, Permissions and Activity Lifecycle were presented."
  );
  setText(
    "des_16_8",
    "After the end of the workshop, there was a presentation of  the EESTEC Competition of Android (ECA), an international competition about Android app development, where students can present and implement any idea they have about an Android app."
  );

  setText(
    "des_15_1",
    "Implemending Biomedical Technology on Clinical Practice"
  );
  setText(
    "makeactive4s",
    "Implemending Biomedical Technology on Clinical Practice"
  );
  setText(
    "des_15_2",
    "On 4th of December 2015, EESTEC LC Xanthi organized a seminar about Biomedicine Technology with the title “Implemending Biomedical Technology on Clinical Practice”. <br>The lecturer was Spiretta Golemati, Assistant Professor of NUA on the field of Biomedicine Technology. <br>The seminar was about the connection of the science of Electrical Engineering with Biomedicine and Clinical Practice."
  );
  setText(
    "des_15_3",
    "On November 2015, EESTEC LC Xanthi in cooperation with professor Pavlos Efraimidis and his research team, organized a series of Android Programming seminars and workshops. The courses will be beginner friendly although any knowledge of Java and XML will be useful."
  );
  setText(
    "des_15_4",
    "On the 16th and 17th of May 2015, EESTEC LC Xanthi in cooperation with Research Center “Athina” and the Mechatronics and System Automation Laboratory organized an App Development Workshop. Its subject was to get familiar with iOS environment, the basics of App Development and at the end the building of an App from scratch."
  );
  setText(
    "des_15_5",
    "More specifically, the participants got to know about Application Marketing, Monetizing, Performance Metrics and of course Development. <br>The main lecturer was Lazaros Vrysis (ELectrical Engineer and PhD candidate), cofounder of Playcompass Entertainment."
  );
  setText("des_15_6", "Graduation! What’s next?");
  setText("des_15_6_2", "Graduation! What’s next?");
  setText(
    "des_15_7",
    "On May 2015, EESTEC LC Xanthi in cooperation with “JobFair athens”, organized a seminar with the title “Graduation! What’s next?”. The goal was to familiarize the students with the situation on the job market through lectures, CV courses and interviews simulation. "
  );
  setText(
    "des_15_8",
    "Furthermore, the students were informed about the Research and Development field and also in the Industry field. There was a good attendance of nearly 250 students from all the faculties of Xanthi. <br>The lecturers were:"
  );
  setText(
    "des_15_9",
    "•  Intze georgia, Europe Direct Xanthi partner<br>•  Chaidopoulou Amalia, DASTA Duth partner<br>•  Dimitriadou Paraskevi, Europe Direct Xanthi partner<br>•  Pavlidis Georgios, Research Director at research center 'Athina'<br>•  Mouroutsos Spyridon, Assistant Professor of Department of Electrical and Computer Engineering of Duth"
  );

  setText(
    "des_14_1",
    "On the 8th of April 2014, EESTEC LC Xanthi organized a seminar on post-graduate courses by KIC InnoEnergy. KIC InnoEnergy is an Institute which focuses on technology, entrepreneurship and pioneering. Their goal is to become a pioneer in the field of sustainable energy. On that matter they offer seven 2-year postgraduate courses in big European Universities. <br>These were:"
  );
  setText(
    "des_14_2",
    "•  M.Sc. Clean Fossil and Alternative Fuels Energy<br>•  M.Sc. Energy Technologies<br>•  M.Sc. Environmental Pathways for Sustainable Energy Systems<br>•  M.Sc. Innovation in Nuclear Energy<br>•  M.Sc. Renewable Energy<br>•  M.Sc. Energy for Smart Cities<br>•  M.Sc. Smart Electrical Networks and Systems<br>"
  );
  setText(
    "des_14_3",
    "The lecturer was Aggelos Roussos, representative of KIC InnoEnergy, postgraduate student of MSc. Energy Technologies and graduate of our faculty. He will present the programmes, the opportunity they offer as well as his own experience in this certain field and in abroad studies in general."
  );
  setText(
    "des_14_4",
    "On the 5th and 6th of April 2014, EESTEC JLC Xanthi organized a workshop with the title “Rock the Bit”. The workshop was about simulation of musical instruments using the Arduino socket. <br>The participants had the chance to implement musical instruments from scratch on hardware and software level. The workshop lasted 8 hours and was split in two parts."
  );

  setText(
    "des_13_1",
    "On the 17th of December 2013, EESTEC JLC Xanthi held the EESTEC Competition for Android (ECA), which is an international Android App Development competition. It was held internationally for the third time and for the first time here in Xanthi. <br>Any student from around Europe could participate, learn about Application Development and practice their skills. Android is a big part of our lives so this competition offered a great chance to get engaged with App Development."
  );

  /* Past Boards */
  setText("boards", "Past Boards");
  setText(
    "board2021_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Euagelos Sidiropoulos"
  );
  setText(
    "board2021_2",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of Internal Affairs:</b></strong> Ioanna Tsakalidou"
  );
  setText(
    "board2021_3",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of External Affairs:</b></strong> Ioannis Totidis"
  );
  setText(
    "board2021_4",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Stratos Politis"
  );
  setText(
    "board2021_5",
    "<strong style='color: red; font-size: 16px'><b>Contact Person</b></strong> Georgos Karamanidis"
  );
  setText(
    "board2020_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Ioannis Nanis"
  );
  setText(
    "board2020_2",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of Internal Affairs:</b></strong> Anna Darda"
  );
  setText(
    "board2020_3",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of External Affairs:</b></strong> Periklis Mazarakis"
  );
  setText(
    "board2020_4",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Athanasia Tzoni"
  );
  setText(
    "board2020_5",
    "<strong style='color: red; font-size: 16px'><b>Contact Person</b></strong> Ioannis Roussos"
  );
  setText(
    "board2019_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Giorgos Kefalas"
  );
  setText(
    "board2019_2",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of Internal Affairs:</b></strong> Mikaela Tsakalidou"
  );
  setText(
    "board2019_3",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of External Affairs:</b></strong> Nikoleta Gerousi"
  );
  setText(
    "board2019_4",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Giorgos Balamotis"
  );
  setText(
    "board2019_5",
    "<strong style='color: red; font-size: 16px'><b>Contact Person:</b></strong> Dimitris Dedemadis"
  );
  setText(
    "board2018_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Despoina Fragkoulidou"
  );
  setText(
    "board2018_2",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of Internal Affairs:</b></strong> Giorgos Krassakopoulos"
  );
  setText(
    "board2018_3",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of External Affairs:</b></strong> Maria Demertzi"
  );
  setText(
    "board2018_4",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Vasileios Konstas"
  );
  setText(
    "board2018_5",
    "<strong style='color: red; font-size: 16px'><b>Contact Person:</b></strong> Michalis Fotiadis"
  );
  setText(
    "board2017_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Anastasia Ioannidou"
  );
  setText(
    "board2017_2",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of Internal Affairs:</b></strong> Thanasis Kotsiopoulos"
  );
  setText(
    "board2017_3",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of External Affairs:</b></strong> Marina Soula"
  );
  setText(
    "board2017_4",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Giorgos Siachamis"
  );
  setText(
    "board2017_5",
    "<strong style='color: red; font-size: 16px'><b>Contact Person:</b></strong> Panagiotis Andreou"
  );
  setText(
    "board2016_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Giorgos Peikos"
  );
  setText(
    "board2016_2",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of Internal Affairs:</b></strong> Apostolis Averkiadis"
  );
  setText(
    "board2016_3",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of External Affairs:</b></strong> Dionisis Filippas"
  );
  setText(
    "board2016_4",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Miltiadis Alexis"
  );
  setText(
    "board2016_5",
    "<strong style='color: red; font-size: 16px'><b>Contact Person:</b></strong> Apostolis Stefanidis"
  );
  setText(
    "board2015_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Thodoris Rizopoulos"
  );
  setText(
    "board2015_2",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of Internal Affairs:</b></strong> Kassiani Nikolopoulou"
  );
  setText(
    "board2015_3",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of External Affairs:</b></strong> Christos Traianos"
  );
  setText(
    "board2015_4",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Danis Desipris"
  );
  setText(
    "board2015_5",
    "<strong style='color: red; font-size: 16px'><b>Contact Person:</b></strong> Dimitra Filippidou"
  );
  setText(
    "board2014_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Christos Petrou"
  );
  setText(
    "board2014_2",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of Internal Affairs:</b></strong> Maria Kouneli"
  );
  setText(
    "board2014_3",
    "<strong style='color: red; font-size: 16px'><b>Vice Chairperson of External Affairs:</b></strong> Nikos Anastasiou"
  );
  setText(
    "board2014_4",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Kyriakos Mpakirlis"
  );
  setText(
    "board2014_5",
    "<strong style='color: red; font-size: 16px'><b>Contact Person:</b></strong> Panagiotis Ardaggelou"
  );
  setText(
    "board2013_1",
    "<strong style='color: red; font-size: 16px'><b>Chairperson:</b></strong> Christina Semertzidou"
  );
  setText(
    "board2013_2",
    "<strong style='color: red; font-size: 16px'><b>Treasurer:</b></strong> Georgia Theodosiadou"
  );
  setText(
    "board2013_3",
    "<strong style='color: red; font-size: 16px'><b>Contact Person:</b></strong> Eleni Koumnioti (Founder of LC Xanthi)"
  );

  createCookie("lang", "ΕΝ");
}

function translateGR() {
  /* Nav Bar */
  setText("home", "Αρχικη");
  setText("about", "Σχετικα");
  setText("work", "Δρασεις");
  setText("board", "το προεδρειο");
  setText("partners", "Συνεργατες");
  setText("contact", "Επικοινωνια");

  /* Index */
  setText("about0", "Σχετικα με εμας");
  setText("work1", "Οι δρασεις μας");
  setText("contact0", "επικοινωνηστε μαζι μας");
  setText("about1", "Τι είναι η EESTEC");
  setText(
    "about2",
    "Η Electrical Engineering STudents’ European Association (EESTEC) είναι ένας μη πολιτικός, μη κυβερνητικός και μη κερδοσκοπικός πανευρωπαϊκός οργανισμός φοιτητών στο πεδίο του ηλεκτρολόγου μηχανικού."
  );
  setText(
    "about3",
    "Σκοπός της EESTEC είναι να δημιουργήσει, να προωθήσει και να αναπτύξει διεθνείς επαφές και ανταλλαγή ιδεών μεταξύ φοιτητών. Η αποστολή της οργάνωσης είναι η ανάπτυξη των μελών τοσο ακαδημαϊκα οσο και επαγγελματικά."
  );
  setText("about4", "Η Τοπική Επιτροπή Ξάνθης");
  setText(
    "about5",
    "Η Τ.Ε. Ξάνθης είναι μέλος του παραπάνω οργανισμού με περισσότερα απο 60 ενεργά μέλη-φοιτητές του Δημοκριτείου Πανεπιστημίου Θράκης. Παρ' όλο που ιδρύθηκε το 2010, έχει καταφέρει να γίνει μια απο τοις πιο ενεργές φοιτητικές οργανώσεις στην Θράκη με συχές δράσεις και πολλά ενεργά μέλη τόσο σε τοπικό όσο και σε διεθνές επίπεδο. "
  );
  setText("stats", "Η EESTEC ΣΕ ΑΡΙΘΜΟΥΣ");
  setText("stats1", "Μέλη");
  setText("stats2", "Χώρες");
  setText("stats3", "Επιτροπές");
  setText("board1", "Το προεδρειο");
  setText("chair", "Ιωάννης <br> Ταμπάκης");
  setText("chair1", "Πρόεδρος");
  setText("vcia", "Αναστάσιος <br> Ταχτατζής");
  setText("vcia1", "Αντιπρόεδρος Εσωτ. Yπ.");
  setText("vcea", "Ελεονώρα <br> Μακρίδου");
  setText("vcea1", "Αντιπρόεδρος Εξώτ. Yπ.");
  setText("treasurer", "Χριστίνα <br> Ντάλλη");
  setText("treasurer1", "Ταμίας");
  setText("cp", "Νικόλας <br> Πούλιος");
  setText("cp1", "Υπ. Επικοινωνίας");
  setText("past_boards", "Προηγούμενα Προεδρεία");
  setText("partners1", "Χορηγοι Επικοινωνιας");
  setText("partners2", "Υποστηρικτες");
  setText("partners3", "Γινε συνεργατης μας");
  setText(
    "partners4",
    "Η EESTEC προσφέρει μια μεγάλη ευκαιρία για να προωθήσετε της εταιρια σας ή τις υπηρεσίες σας σε μελλοντικούς μηχανικούς σε όλη την Ευρώπη. Η Τ.Ε. Ξάνθης έχει μεγάλο αντίκτυπο στης φοιτητική κοινότητα της Ξάνθης και τα μέλη της είναι απο τους πιο δραστήριους φοιτητές της πόλης. Μέσα απο τις δράσεις μας μπορέιτε να προσεγγίσετε τους φοιτητές αυτούς, οι οποίοι μπορέι να γίνουν οι μελλοντικοί συνεργάτες σας. Μια συνεργασία με εμάς αναμφισβήτητα θα αυξήσει την αναγνωρησιμότητα και προβολή της εταιρία σας στους φοιτητές και γενικότερα στην Ξάνθη."
  );
  setText(
    "partners5",
    "Αν ενδιαφέρεστε να γίνετε συνεργάτες μας επικοινωνήστε στο <a href='mailto:eestecfrxanthi@gmail.com' target='_top'>eestecfrxanthi@gmail.com</a> ."
  );
  setText("partners6", "Οι συνεργάτες μας");
  setText("partners7", "Πλατινενιος χορηγος");
  setText("partners8", "Κυριοι Χορηγοι");
  setText("partners9", "Υποστηρικτες");
  setText("partners10", "Υπο την αιγιδα");
  setText("partners11", "Πλατινενιοι Χορηγοι");
  setText("partners12", "Χρυσοι Χορηγοι");
  setText("partners13", "Χορηγοι");

  setText("contact1", "Τσιμισκή 58<br>Ξάνθη, Ελλάδα, 67100");
  setText("contact2", "Φόρμα Επικοινωνίας");
  setText("other_projects", "Αλλες Δρασεις");

  /* International */
  setText("about_1", "Ποιά είναι τα επίσημα events της EESTEC?");
  setText(
    "about_2",
    "Υπάρχουν 5 τύποι επίσημων διεθνών δράσεων στην EESTEC: exchanges, workshops, advanced skills workshops, exclusive events, Congresses and operational events. Κατά την διάρκεια αυτών των δράσεων, οι φοιτητές-μέλη της EESTEC έχουν την δυνατότητα να ανακαλύψουν νέες κουλτούρες, να μάθουν νέα πράγματα, να κοινωνικοποιηθούν και να ταξιδέψουν σε όλη την Ευρώπη. "
  );
  setText("about_3", "Σχετικά με την Τ.Ε. Ξάνθης");
  setText(
    "about_4",
    "Στην Τ.Ε. Ξάνθης έχουμε οργανώσει 3 ειδών διεθνείς δράσεις. Κατα κύριο λόγο workshops αλλά και BOMs, όπως επίσης και ένα exchange. "
  );
  setText("workshop_about_1", "Τι είναι ένα International Workshop?");
  setText(
    "workshop_about_2",
    "Μία απο τις διεθνείς δράσεις που μπορεί να οργανώσει μια Οργανωτική Επιτροπή (Τ.Ε.) είναι ένα workshop. Το workshop αποτελείται απο ακαδημαϊκες διαλλέξεις και διάφορες δραστηριότητες που οργανώνονται απο την Τ.Ε. . Υπάρχουν συγκεκριμένα κριτήρια που πρέπει να πληρεί ένα event για να θεωρηθεί workshop: Πρέπει οι διαλλέξεις να είναι στα Αγγλικά και πρέπει να διαρκέσουν συνολικά τουλάχιστον 15 ώρες. Το ακαδημαϊκό περιεχόμενο μπορεί να αποτελέιται απο διαλλέξεις, πρακτικές εφαρμογές, εργαστήρια και εκπαιδευτικές εκδρομές. Τα θέματα είναι συνήθως προσανατολισμένα στο αντικέιμενο του Ηλεκτρολόγου Μηχανικού, της επιστήμης των υπολογιστών, των δεξιοτήτων (Soft Skills) ή των οικονομικών. Εκτός απο το ακαδημαϊκό μέρος, τα workshops της EESTEC συνδιάζονται με κοινωνικές δραστηριότητες. "
  );
  setText(
    "machiners_1",
    "Η Τοπική Επιτροπή της Ξάνθης τον Δεκέμβρη του 2019 διοργάνωσε το 6ο International Workshop με θέμα: Εισαγωγή στην Μηχανική Μάθηση και τις εφαρμογές της Τεχνητής Νοημοσύνης."
  );
  setText(
    "machiners_2",
    "Οι συμμετέχοντες , αρχικά, παρακολούθησαν εισαγωγικές διαλέξεις στην θεωρία της Μηχανικής Μάθησης. Ειδικότερα, είδαν παραδείγματα εφαρμογών της μηχανικής μάθησης, πως γίνεται προετοιμασία των δεδομένων πριν την επεξεργασία τους , και κάποιους βασικούς αλγορίθμους στην επεξεργασία αυτών των δεδομένων. Ύστερα ακολούθησε ξενάγηση στο Ερευνητικό Κέντρο Αθηνά, με σκοπό την παρουσίαση των τεχνολογιών που εφαρμόζουν στο έργο τους, και έγιναν διαλέξεις για τα είδη της Μηχανικής Μάθησης και τα νευρωνικά δίκτυα. Στους συμμετέχοντες, όμως δόθηκε ευκαιρία να βάλουν στην πράξη αυτά  που παρακολούθησαν με εισαγωγικά εργαστήρια στην Python και σε παραδείγματα ταξινόμησης. Το Workshop έκλεισε με διαλέξεις για κάποιες εφαρμογές της Τεχνητής Νοημοσύνης στην Ιατρική και στην Ρομποτική."
  );
  setText(
    "blinders_1",
    "Το International Workshop που διοργανώθηκε από την τοπική επιτροπή της Ξάνθης τον Μάιο του 2018 αφορούσε την αξιοποίηση των συστημάτων απομακρυσμένου ελέγχου στη λειτουργία ενός τρισδιάστατου εκτυπωτή."
  );
  setText(
    "blinders_2",
    "Μέσω των αντίστοιχων σεμιναρίων οι συμμετέχοντες είχαν την ευκαιρία να συναρμολογήσουν από την αρχή έναν τέτοιο εκτυπωτή και στη συνέχεια να προχωρήσουν στην κατάλληλη ρύθμισή του. Ο ασύρματος έλεγχος του εκτυπωτή μέσω wi-fi επιτεύχθηκε με τη χρήση της πλακέτας Raspberry Pi που επέτρεψε την εξ αποστάσεως αποστολή εντολών. Για την βελτιστοποίηση του απομακρυσμένου ελέγχου υλοποιήθηκε επιπροσθέτως ένα σύστημα ανάδρασης προκειμένου να εξακριβωθεί η ορθή πραγματοποίηση των δοθέντων εντολών."
  );
  setText(
    "brewing_1",
    "Μια εξαιρετικά πρωτότυπη εφαρμογή των Βιομηχανικών Αυτοματισμών στον τομέα της ζυθοποιίας αποτέλεσε το αντικείμενο της συγκεκριμένης διοργάνωσης."
  );
  setText(
    "brewing_2",
    "Αφενός, οι συμμετέχοντες εξοικειώθηκαν με τον συνεχώς εξελισσόμενο κλάδο των Βιομηχανικών Αυτοματισμών  και αφετέρου μυήθηκαν στην διαδικασία παραγωγής ζύθου με στόχο την κατασκευή ενός συστήματος θέρμανσης- ψύξης ώστε να επιτευχθεί η βέλτιστη σταθερή θερμοκρασία για την πραγματοποίηση της ζύμωσης. Είναι αξιοσημείωτη η χρησιμότητα του συστήματος αυτού στη ζυθοποιία, καθώς καθιστά δυνατή την παραγωγή ζύθου καθ’ όλη τη διάρκεια του έτους, σε αντίθεση με τη συμβατική μέθοδο ζύμωσης που πραγματοποιείται μόνο την άνοιξη λόγω των περιορισμών που επιβάλλει η εξωτερική θερμοκρασία. Η εξοικείωση των συμμετεχόντων με το αντικείμενο του workshop πραγματοποιήθηκε μέσα από διαλέξεις ειδικών, αλλά και βιωματική επαφή. Τα τελικά αποτελέσματα παρουσιάστηκαν και με τη μορφή γραφήματος για την καλύτερη κατανόηση της διαδικασίας που ακολουθήθηκε."
  );
  setText(
    "hoa_1",
    "Η διοργάνωση του House of Apps ασχολήθηκε με μία από τις πολυάριθμες εφαρμογές του Διαδικτύου των πραγμάτων (Internet of Things) στις οικιακές συσκευές στο πλαίσιο ενός «έξυπνου σπιτιού»."
  );
  setText(
    "hoa_2",
    "Βασικό πλεονέκτημα της τεχνολογίας «Έξυπνο Σπίτι» είναι η δυνατότητα παρακολούθησης και διαχείρισης όλων των χώρων και εγκαταστάσεων μιας κατοικίας με οποιοδήποτε τρόπο επικοινωνίας, όπως ο έλεγχος του φωτισμού μέσω της αξιοποίησης των αυτοματισμών. Οι συμμετέχοντες ήρθαν σε επαφή με τη συγκεκριμένη τεχνολογία κατασκευάζοντας εφαρμογές που τους επέτρεπαν να ελέγχουν τις ηλεκτρονικές συσκευές. Μάλιστα, στο τέλος του workshop είχαν την ευκαιρία να δοκιμάσουν στην πράξη τις εφαρμογές αυτές σε μία τοπική κατοικία."
  );
  setText(
    "planb_1",
    "Η ασφάλεια στο Διαδίκτυο και οι κίνδυνοι που αντιμετωπίζουν οι χρήστες του, ένα καίριο ζήτημα στον σύγχρονο τεχνολογικό πολιτισμό αποτέλεσε την έμπνευση για το international workshop «Plan B:Hack the system»."
  );
  setText(
    "planb_2",
    "Στο πλαίσιο της διοργάνωσης, οι συμμετέχοντες απέκτησαν γνώσεις πάνω σε εργαλεία που επιτρέπουν την εντοπισμό αδυναμιών στα υπολογιστικά συστήματα, καθώς και με ποιο τρόπο ένα τέτοιο σύστημα θα μπορούσε να παραβιαστεί. Μάλιστα, είχαν την ευκαιρία να δοκιμάσουν τις γνώσεις που απέκτησαν με βιωματικό τρόπο με τη μορφή ενός διαγωνισμού στο τέλος του workshop."
  );
  setText(
    "rock_1",
    "Το «Rock the Bit» ήταν το πρώτο international workshop που διοργάνωσε η νεοσύστατη τότε τοπική επιτροπή της Ξάνθης. Αντικείμενο του workshop αποτέλεσε η εξοικείωση των συμμετεχόντων με την πλατφόρμα του Arduino και το πώς αυτή μπορεί να χρησιμοποιηθεί για τη δημιουργία μουσικών οργάνων."
  );
  setText(
    "rock_2",
    "Συγκεκριμένα, οι συμμετέχοντες απέκτησαν βασικές γνώσεις και ικανότητες χειρισμού της πλατφόρμας αυτής με πρωτότυπο και διασκεδαστικό τρόπο. Χωρίστηκαν σε ομάδες καθεμία από τις οποίες είχε αναλάβει την δημιουργία κάποιου μουσικού οργάνου, όπως ντραμς, μέσω της χρήσης του Arduino. Στο πλαίσιο της διοργάνωσης, πραγματοποιήθηκε και εκπαιδευτική εκδρομή σε μία σύγχρονη φάρμα αγελάδων, όπου το άρμεγμα γίνεται με τη χρήση αυτοματισμών."
  );
  setText("exchange_about_1", "Τι είναι ένα International Exchange?");
  setText(
    "exchange_about_2",
    "Τα International Exchanges είναι ένας τύπος διεθνών δράσεων της EESTEC. Τα χαρακτηριστικά ενός τέτοιου event είανι η απουσία ακαδημαϊκου περιεχομένου, παρόλο που μπορεί να περιέχουν κάποιο σεμνάριο ανάπτυξης δεξιοτήτων (Soft Skills Training). Ο στόχος ενός Exchange είναι η γνωριμία με την πόλη, την κουλτούρα της χώρας και η διασκέδαση. Οι διάφορες ψυχαγωγικές δραστηριότητες, ανάλογα την εποχή είανι αυτό που κάνει αυτά τα event τόσο δημοφιλή στους φοιτητές. Στα Exchanges υπάρχει η πιθανότητα να απαιτείται κάποιο μικρό, συνήθως, αντίτιμο συμμετοχής."
  );
  setText(
    "aqua_1",
    "Τον Ιούνιο του 2015, το LC Xanthi διοργάνωσε ένα Summer Exchange, τους 'Aquaholics', που πραγματοποιήθηκε στο νησί της Θάσου. Το event περιλάμβανε πέντε ημέρες διασκέδασης και άφθονων εμπειριών για τους participants."
  );
  setText(
    "aqua_2",
    "Συγκεκριμένα, μερικές απο τις δραστηριότητες που είχαν την δυνατότητα να ασχοληθούν οι συμμετάσχοντες ήταν η πεζοπορία στα βουνά, τα θαλάσσια παιχνίδια, επίσης να εξερευνήσουν τις αμέτρητες παραλίες της Θάσου και να δοκιμάσουν την ελληνική κουζίνα. Σκοπός του event ήταν να δημιουργηθούν νέες φιλίες ανάμεσα σε ανθρώπους διαφορετικής κουλτούρας και νοοτροπίας."
  );
  setText("boms_about_1", "Τι είναι τα EESTEC Board Meetings (BOMs)?");
  setText(
    "boms_about_2",
    "Καθώς το Προεδρείο της EESTEC αποτελείται απο άτομα διαφορετικών Ευρωπαϊκών χωρών, οι περισσότερες συναντήσεις τους γίνονται εξ αποστάσεως. Ωστόσο, λόγω της σημαντικότητας των αποφάσεων που το προεδρείο πρέπει να λάβει, οργανώνονται συναντήσεις απο κοντά κατα την διάρκει της θητέιας τους. "
  );
  setText(
    "boms_about_3",
    "Στην Τ.Ε. Ξάνθης είμαστε πάντα πρόθυμοι να συνεισφέρουμε στην EESTEC σε διεθνές επίπεδο. Αυτός είναι και ο κύριος λόγος που έχουμε οργανώσει 2 BOMs τα τελευταία χρόνια, ένα HOBOM το 2015 και ένα WiBOM το 2018."
  );
  setText("wibom_1", "Τι είναι το WiBOM?");
  setText(
    "wibom_2",
    "Είναι μία συνάντηση του προεδρείου της EESTEC που οργανώνεται απο μέα Τοπική Επιτροπή για το διεθνές προεδρείο κατα την διάρκεια του χειμώνα. Το προεδρείο συζητά την γενική κατάσταση στον οργανισμό μέχρι εκείνη την χρονική στιγμή και λαμβάνει αποφάσεις για τον υπόλοιπο χρόνο."
  );
  setText("wibom_3", "Το WiBOM 2018 στην Ξάνθη");
  setText(
    "wibom_4",
    "Το Φεβρουάριο διεξήχθη στο LC Xanthi το WiBOM (Winter International Board Meeting). Πιο συγκεκριμένα τα 5 μέλη του διεθνές προεδρείου, επέλεξαν μια τοπική επιτροπή, στη προκειμένη περίπτωση το δικό μας LC για να κάνουν μια συνάντηση όλοι μαζί αλλά και να μας γνωρίσουν. Σε αυτή την εβδομάδα τελειοποιήθηκε το strategy plan, δηλαδή το πλάνο που φτιάχνεται κάθε 3 χρόνια με το οποίο θα πορευτεί η EESTEC για να επόμενα 5 χρόνια."
  );
  setText("hobom_1", "Τι είναι το HOBOM?");
  setText(
    "hobom_2",
    "The HOBOM is the first meeting of the EESTEC Board after their election in Spring Congress. It can be organized by any EESTEC Committee, which provides the accommodation, food and working space. The HOBOM is attended by the new Board, the previous Board, and the new Oversight Committee. During HOBOM, the previous Board provides the Handover to the new Board and the new Board has time to bond and spend some quality time together for the first time. The HOBOM is necessary for all Boards of EESTEC."
  );
  setText(
    "hobom_2",
    "Το HOBOM είναι η πρώτη συνάντηση του νεο-εκλεγμένου Προεδρείου της EESTEC μετά την εκλογή του στο Spring Congress. Μπορεί να οργανωθεί απο οποιαδήποτε Τοπική Επιτροπή, η οποία παρέχει στο προεδρείο διαμονή, σίτηση και χώρο εργασίας. Στο HOBOM συμμετέχει το νέο Προεδρείο, το προηγούμενο Προεδρείο και η νέα Ελεγκτική Επιτροπή. Κατα την διάρκεια του HOBOM, το προηγούμενο Προεδρείο μεταβιβάζει όλες τις γνώσεις και πληροφορίες στο νέο Προεδρείο το οποίο θέτει τις βάσεις για την μεταξύ τους συνεργασία κατα την διάρκεια της θητείας τους. Το HOBOM είναι υποχρεωτικό για κάθε Προεδρείο της EESTEC, σε τοπικό και διεθνές επίπεδο."
  );
  setText("hobom_3", "Το HOBOM 2015 στην Ξάνθη");
  setText(
    "hobom_4",
    "Το 2015 η Τοπική Επιτροπή Ξάνθης οργάνωσε το HOBOM, όποι το παλαιό και νέο Προεδρείο της EESTEC συναντήθηκαν, θέσανε τους ετήσιους στόχους και λάβανε σημαντικές αποφάσεις για το μέλλον τους οργανισμού."
  );

  /* SSA */
  setText("ssa_about", "Τι είναι το SSA");
  setText(
    "ssa_about1",
    "Είναι ένα διεθνές project της EESTEC που εφαρμόζεται σε πολλές Τοπικές Επιτροπές ανα την Ευρώπη. Ο κύριος στόχος του είναι να δώσει την ευκαιρία στους φοιτητές να βελτιώσουν τις προσωπικές και επαγγελματικές τους δεξιότητες, κάτι που θα έχει θετική επίδραση στην αυτοπεποίθηση και αυτοεκτίμησή τους. Κατα την διάρκεια του SSA οι φοιτητές αναπτύσσουν δεξιότητες όπως η ηγεσία, η ομαδικότητα, η επικοινωνία και η πειθώ, η συναισθηματική νοημοσύνη και άλλα σχετικά θέματα."
  );
  setText("ssa_about2", "Το SSA στην Ξάνθη");
  setText(
    "ssa_about3",
    "Η Τοπική Επιτροπή Ξάνθης έχει μεγάλη παράδοση στην ανάπτυξη τέτοιου είδους δεξιοτήτων, έχοντας οργανώσει δύο SSAs τα τελευταία χρόνια. Θα συνεχίσουμε να οργανώνουμε το SSA ως ένα project ανοιχτό σε μέλη μας και μη."
  );
  setText(
    "ssa_1",
    "Τον Νοέμβριο του 2016 και για πρώτη φορά, η Τ.Ε. Ξάνθης οργάνωσε το SSA με στόχο να κάνει γνωστή στην φοιτητική κοινότητα την σημασία των δεξιοτήτων (Soft Skills) στον εργασιακό χώρο. Το διήμερο σεμινάριο επικεντρώθηκε σε δύο κατηγορίες δεξιοτήτων: την ηγεσία και την αυτοβελτίωση. Στο σεμινάριο της Ηγεσίας οι συμμετέχοντες εξάσκησαν τις επικοινωνιακές τους δεξιότητες και έμαθαν την σημασία της ανάθεσης και παρακίνησης σε έναν ηγέτη. Στο σεμινάριο της Αυτοβελτίωσης επικεντρώθηκαν σε στοιχεία όπως η αυτοπεποίθηση, η προσωπική εικόνα και η συναισθηματική νοημοσύνη. Καθένα από τα δύο σεμινάρια διήρκησε 4 ώρες και πραγματοποιήθηκαν από EESTEC Trainers."
  );
  setText(
    "ssa_2",
    "Το SSA 2 ήταν η δεύτερη έκδοση του SSA το οποίο η Τ.Ε. Ξάνθης πραγματοποίησε και έλαβε χώρα τον Οκτώβρη του 2017. Στόχος ήταν και πάλι να γίνει γνωστή στην φοιτητική κοινότητα η σημασία των δεξιοτήτων (Soft Skills) στον εργασιακό χώρο. Το διήμερο σεμινάριο επικεντρώθηκε στην βασική κατηγορία των Soft Skills, την Αυτοβελτίωση. Τα δύο υπό σεμινάρια είχαν τίτλο ‘Habits Of Highly Effective People’ και ‘Feedback & Strokes’. Καθένα διήρκησε 8 ώρες (4 ώρες την ημέρα) και πραγματοποιήθηκαν από EESTEC Trainers."
  );
  setText(
    "ssa_3",
    "Το SSA 3 ήταν η τρίτη έκδοση του SSA το οποίο η Τ.Ε. Ξάνθης πραγματοποίησε και έλαβε χώρα τον Νοέμβριο του 2018. Στόχος ήταν και πάλι να γίνει γνωστή στην φοιτητική κοινότητα η σημασία των δεξιοτήτων Soft Skills. Το διήμερο σεμινάριο επικεντρώθηκε σε δύο βασικές κατηγορίες των Soft Skills, self development και team management. Πραγματοποιήθηκαν από EESTEC Trainers σε συνεργασία με trainers άλλων οργανισμών στην αγγλική και ελληνική γλώσσα."
  );
  setText(
    "ssa_4",
    "Το SSA 4 ήταν η τέταρτη έκδοση του SSA το οποίο η Τ.Ε. Ξάνθης πραγματοποίησε τον Νοέμβριο του 2019. Στόχος ήταν και πάλι να γίνει γνωστή στην φοιτητική κοινότητα η σημασία των δεξιοτήτων Soft Skills. Το διήμερο σεμινάριο επικεντρώθηκε σε δύο βασικές κατηγορίες των Soft Skills, Self Development και Team Management. Πραγματοποιήθηκαν από 7 EESTEC Trainers σε συνεργασία με 1 trainer άλλου οργανισμού. Τα training sessions πραγματοποιήθηκαν στα αγγλικά (2) και στα ελληνικά (2)."
  );
  setText(
    "ssa_5",
    "Η EESTEC LC XANTHI με την εμπειρία των υπόλοιπων τεσσάρων χρόνων απόφασισε να διοργανώσει το SSA 5 αλλά, διαδικτυακά αυτήν τη φορά. To event θα πραγματοποιηθεί 28 και 29 Νοεμβρίου με θέμα “Living and Working During the Pandemic”. Τα trainings θα αποτελούνται από 2 μέρη. Το κάθε μέρος θα διαρκέσει περίπου 2-2,5 ώρες. Στόχος των trainings είναι η ανάπτυξη των δεξιοτήτων που θα βοηθήσει τους συμμετέχοντες στον καιρό της πανδημίας."
  );

  /* CareerDay */
  setText("career_1", "Τι είναι το Career Day?");
  setText(
    "career_2",
    "Το Career Day είναι ένα τοπικό event που οργανώνεται απο την Τοπική Επιτροπή Ξάνθης ετησίως εδώ και 3 χρόνια. Στόχος τους είναι η σύνδεση των φοιτητών με την αγορά εργασίας, η ενημέρωση τους για τις απαιτήσεις της αγοράς εργασίας και η δικτύωση τους. Πρόκειται για μία επιτυχημένη πρωτοβουλια της Τ.Ε. Ξάνθης και βετιώνεται χρόνο με τον χρόνο."
  );
  setText(
    "career_3",
    "Τον Απρίλιο του 2018 το LC μας διοργάνωσε για τρίτη συνεχόμενη χρονιά το Career Day. Σκοπός του συγκεκριμένου event ήταν η ενημέρωση των φοιτητών σχετικά με τις απαιτήσεις που έχουν οι εργοδότες από τους υποψήφιους αλλά και ο σχηματισμός  μιας γενικότερης εικόνας σε ο,τι αφορά τον εργασιακό τομέα. Στην εκδήλωση αυτή παρευρέθηκαν ομιλητές, οι περισσότεροι εκ των οποίων ήταν εκπρόσωποι εταιριών, και έδωσαν στους φοιτητές  περισσότερες πληροφορίες σχετικά με το τι πρόκειται να αντιμετωπίσουν κατά την προσπάθειά τους για εύρεση εργασίας."
  );
  setText(
    "career_4",
    "Συγκεκριμένα στην εκδήλωση παρευρέθηκε ο κ. Δημήτρης Τσέλιος με την ομιλία ‘’Attitude is everything’’, ο οποίος μας εξήγησε πόσο σημαντική είναι η επένδυση του ανθρώπου στην προσωπική του ανάπτυξη και τι μπορεί να επιφέρει."
  );
  setText(
    "career_5",
    "Στη συνέχεια ακολούθησε η ομιλία του κ. Χρήστου Λύτρα μέσω video call με τίτλο 'What are VC's looking for in your Tech Company - What do you need to know as a founder of a tech startup before your talk to professional investors'."
  );
  setText(
    "career_6",
    "Στην εκδήλωση παρευρέθηκε και η κα. Παρασκευή Γιούρκα με τίτλο ομιλίας 'Manoeuvre your skills to entrepreneurial success'. Στόχος της ομιλίας ήταν να δώσει πρακτικές συμβουλές για την αντιστοίχηση των δεξιοτήτων των αποφοίτων με τις πραγματικές ανάγκες της αγοράς εργασίας στο σύγχρονο επιχειρείν!"
  );
  setText(
    "career_7",
    "Ακολούθησε η ομιλία του κ. Χρήστου Γιορδαμλή της Prisma Electronics με τίτλο 'Καινοτομώντας στην Ελλάδα τα χρόνια της Κρίσης– Προκλήσεις – Απειλές – Εμπειρίες στην Πρίσμα Ηλεκτρονικά'."
  );
  setText(
    "career_8",
    "Το δεύτερο Career Day που πραγματοποιήθηκε τον Μάιο του 2017 είχε σαν σκοπό την κατάλληλη ενημέρωση και προετοιμασία των φοιτητών της Ξάνθης για τις τεχνολογικές και επιχειρηματικές καινοτομίες που υπάρχουν στην αγορά εργασίας. Στα πλαίσια της συγκεκριμένης εκδήλωσης, πραγματοποιήθηκε μια ομιλία από φοιτητές, οι οποίοι κατάφεραν να δημιουργήσουν το δικό τους Start Up δημιουργώντας την δημοφιλή στους πολίτες της Ξάνθης εφαρμογή, Deal o’clock."
  );
  setText(
    "career_9",
    "Στη συνέχεια ακολούθησε ομιλία από εκπροσώπους της ΕΚΕΤΑ, ένα από τα σημαντικότερα ερευνητικά κέντρα της της Ελλάδας και συγκαταλέγεται ανάμεσα στους είκοσι κορυφαίους ερευνητικούς και ακαδημαϊκούς φορείς της Ευρωπαϊκής Ένωσης στην προσέλκυση χρηματοδότησης από ανταγωνιστικά ευρωπαϊκά προγράμματα."
  );
  setText(
    "career_10",
    "Στην εκδήλωση παρευρέθηκε και εκπρόσωπος της Ena Συμβουλευτικής με κύριο στόχο να λύσει απορίες σχετικά με το πώς μπορούν να δημιουργηθούν επιχειρήσεις στην Ελλάδα της κρίσης."
  );
  setText(
    "career_11",
    "Στα πλαίσια του δεύτερου Career Day φιλοξενήσαμε μεταξύ άλλων  και μέλη της POWERFOR του μεγαλύτερου διαμεσολαβητή ενεργειακών προϊόντων και υπηρεσιών ηλεκτρικής ενέργειας στον χώρο της βιομηχανίας στην Ελλάδα αλλά και τον ιδιοκτήτη του ηλιακού μικροζυθοποιίου  Ξάνθης όπου παράγεται μπύρα με οικολογική συνείδηση. Εκεί γίνεται εξοικονόμηση ενέργειας λόγω ηλιακών panels, ενώ παράλληλα στοχεύουν σε μείωση των αποβλήτων με επαναχρησιμοποίηση τους σε άλλες μορφές."
  );
  setText(
    "career_12",
    "Το Νοέμβριο του 2016, το LC μας πραγματοποίησε για πρώτη φορά το Career Day με σκοπό να έρθουν οι φοιτητές της Ξάνθης σε επαφή με έμπειρους επαγγελματίες, οι οποίοι θα τους μιλούσαν για την προσωπική τους εμπειρία και σταδιοδρομία στον επαγγελματικό τους τομέα, αλλά θα έλυναν και απορίες των φοιτητών  σχετικά με την επαγγελματική τους κατάρτιση."
  );
  setText(
    "career_13",
    "Στα πλαίσια της εκδήλωσης πραγματοποιήθηκε ομιλία  από εκπρόσωπο της <a href='https://speakt.com'>Speakt.com</a> , μιας  επιτυχημένης start-up εταιρείας που δραστηριοποιείται κυρίως μέσω του διαδικτύου παρέχοντας υπηρεσίες μετάφρασης μέσω της χρήσης μιας web-based εφαρμογής, με έδρα το Λονδίνο έχοντας όμως πολλά γραφεία σε όλη την Ελλάδα. Σκοπός της συγκεκριμένης ομιλίας ήταν η παροχή πληροφοριών σχετικά με το έργο της <a href='https://speakt.com'>Speakt.com</a> αλλά και για το πώς μπορεί να δημιουργηθεί μια start-up επιχείρηση."
  );
  setText(
    "career_14",
    "Στη συνέχεια ακολούθησε ομιλία από την egg μια ομάδα καταρτισμένων ανθρώπων που παρέχει υποστηρικτικές υπηρεσίες για την αποτελεσματική αντιμετώπιση θεμάτων επιχειρηματικής λειτουργίας και ανάπτυξης σε νέες επιχειρήσεις καθώς και ομιλία από τους 100mentors,μια εταιρία που παρέχει τις συμβουλές και την καθοδήγηση για κάθε καινούργιο επιχειρηματικό ξεκίνημα."
  );
  setText(
    "career_15",
    "Στην εκδήλωση παρευρέθηκαν και μέλη της More than (just) themes για να λύσει κάθε απο ρία στην παραγωγή λογισμικού .Ιδρύθηκε το Μάιο του 2011 και εξελίχθηκε σε μια από τις πιο γνωστές εταιρίες στην κοινότητα του Drupal, προσφέροντας πάνω από 20 Premium Drupal Themes."
  );
  setText(
    "career_16",
    "Τέλος πραγματοποιήθηκαν ομιλίες από την Tesibit, που πρόκειται για μια εταιρεία που δραστηριοποιείται στον τομέα των Ανανεώσιμων Πηγών Ενέργειας μεγιστοποιώντας τη λειτουργική απόδοση εγκαταστάσεων μεγάλης κλίμακας και ομιλία από εκπρόσωπο της Grecruitment, μιας εταιρίας στην οποία μέσα  από προσομοιώσεις συνεντεύξεων αλλά και πραγματικών, δίνεται στους απόφοιτους πανεπιστημίων  την ευκαιρία να αποκτήσουν μεγαλύτερη εμπειρία και εξοικείωση στην διαδικασία της συνέντευξης αλλά και τη δυνατότητα διεκδίκησης δουλειάς στο εξωτερικό."
  );

  /* EC */
  setText("ec_1", "Τι είναι το EESTech Challenge?");
  setText(
    "ec_2",
    "Είναι ένας διεθνές project-διαγωνισμός της EESTEC, ανοιχτό προς τους φοιτητές των οποίων οι επιτροπές διεξάγουν Τοπικό Γύρο (Local Round). Το θέμα του διαγωνισμού αποφασίζεται στην αρχή κάθε χρόνου. Το θέμα για το έτος 2016/17 ήταν το Machine Learning και για το ετος 2017/18 τα Big Data. Ο διαγωνισμός αποτελείται απο Τοπικούς Γύρους (Local Rounds) και έναν Τελικό Γύρο (Final Round). Οι Τοπικοί Γύροι μπορούν να έχουν δύο μορφές:<br>• Έναν online γύρο, οποί οι λύσεις θα στέλνονται στην πλατφόρμα που έχει στήσει η EESTEC για τον σκοπό αυτό<br>• Έναν ζωντανό γύρο, όπου οι συμμετέχοντες πρέπει να λύσουν τα task σε συγκεκριμένο χρονικό πλαίσιο.<br>"
  );
  setText(
    "ec_3",
    "Οι κριτές του Τοπικού Γύρου πρέπει να είναι εκπρόσωποι εταιριών ή/και καθηγητές. Οι νικητές του κάθε Τοπικού Γύρου προκρίνονται στον Τελικό Γύρο, όπου θα αναμετρηθούν με συμφοιτητές τους από άλλες Τοπικές Επιτροπές για το ποίος θα κερδίσει τον διαγωνισμό λύνοντας το θέμα που θα θέσει η εταιρια χορηγός.<br>Χρονοδιάγραμμα:<br>• Q&A Sessions<br>• Αιτήσεις Συμμετοχής<br>• Οργανωτικές Επιτροπές Τοπικών Γύρων<br>• Online σεμινάρια<br>• Τοπικοί Γύροι<br>• Τελικός Γύρος<br>"
  );
  setText(
    "ec_4",
    "Υπάρχουν επίσης πρεσβευτές του διαγωνισμού σε κάθε Τοπική Επιτροπή που συμμετέχει για την καλύτερη οργάνωση των Τοπικών Γύρων."
  );
  setText("ec_5", "Το EESTech Challenge στην Ξάνθη");
  setText(
    "ec_6",
    "Η Τ.Ε. Ξάνθης έλαβε μέρος στην δεύτερη έκδοση του διαγωνισμού. Ο Τοπικός Γύρος έλαβε χώρα τον Μάρτιο του 2018."
  );

  /* Seminars & Workshops */
  setText(
    "des_18_1",
    "Πώς η Ρομποτική και η Τεχνητή Νοημοσύνη αλλάζουν τον κόσμο μας"
  );
  setText(
    "des_18_1_2",
    "Πώς η Ρομποτική και η Τεχνητή Νοημοσύνη αλλάζουν τον κόσμο μας"
  );
  setText(
    "des_18_2",
    "Στις 23 Μαΐου 2018, η Τ.Ε. Ξάνθης οργάνωσε μια διαδικτυακή ομιλία με θέμα την Ρομποτική και την Τεχνητή Νοημοσύνη με τίτλο ‘Πώς η ρομποτική και η τεχνητή νοημοσύνη αλλάζουν τον κόσμο μας’. Εισηγητής ήταν ο κ. Νικόλαος Μαυρίδης, PhD από το Massachusetts Institute of Technology (MIT) και ιδρυτής και διευθυντής του Interactive Robots and Media Lab (IRML). Έχει επίσης υπάρξει σε πολυάριθμες θέσεις pro-bono, όπως μέλος του Εκπαιδευτικού Συμβουλίου του MIT και μέντορας για το MIT Enterprise Forum, κριτής των διαγωνισμών 'Drones for Good' του Ντουμπάι και 'Robotics and AI for Good'', ιδρυτής του IEEE UAE Robotics & Automation Society, Αντιπρόεδρος της Ελληνικής Εταιρείας Τεχνητής Νοημοσύνης, Πρόεδρος της TEDx στη Γενεύη, Αθήνα, Τυνησία, UAE."
  );
  setText(
    "des_18_3",
    "Όσοι βρέθηκαν εκεί είχαν την ευκαιρία να πάρουν μια γεύση για το πώς τα AI ρομπότ λειτουργούν αλλά και να θέσουν ερωτήσεις στον εισηγητή μας."
  );
  setText("des_18_4", "Σεμινάριο & Workshop για τα Chatbots");
  setText("des_18_4_2", "Σεμινάριο & Workshop για τα Chatbots");
  setText(
    "des_18_5",
    "Το Σάββατο 10 kai 11 Μαρτίου 2018 η Τ.Ε. Ξάνθης πραγματοποίησε ανοιχτή ομιλία και workshop με θέμα τα Chatbots. Συγκεκριμένα θα αναλύθηκαν τα θέματα:<br>•  Οι δυνατότητες που έχει ο προγραμματισμός και η χρήση των διαδικτυακών ρομπότ<br>•  Περιορισμοί που εμφανίζονται στον προγραμματισμό και τη χρήση των διαδικτυακών ρομπότ<br>•  Γιατί είναι χρήσιμα τα διαδικτυακά ρομπότ<br><br>Στη συνέχεια ακολούθησε το workshop όπου αναλύθηκαν οι διαφορετικές τεχνολογίες οι οποίες χρειάζονται για να υλοποιηθεί ένα Messenger Chatbot όπως:<br>•  η διασύνδεση με το Facebook<br>•  η επεξεργασία των αιτημάτων του χρήστη<br>•  οι τεχνικές αναγνώρισης του νοήματος ενός μηνύματος<br><br>Ιδιαίτερη έμφαση δόθηκε στο κομμάτι του Dialog Management, δηλαδή του υποσυστήματος που επιλέγει την επόμενη απάντηση βάσει των ερωτημάτων και των πληροφοριών που του δίνει ο χρήστης. Στο τέλος, οι συμμετέχοντες είχαν την ευκαιρία να δημιουργήσουν το δικός τους chatbot στο Facebook σε περιβάλλον NodeJS (Server-Side JavaScript)."
  );
  setText(
    "des_18_6",
    "Ομιλητής και υπεύθυνος του workshop ήταν ο Χρήστος Παναγιωτακόπουλος ο οποίος είναι προπτυχιακός φοιτητής της σχολής Ηλεκτρολόγων Μηχανικών & Μηχανικών Υπολογιστών του ΕΜΠ. Τα τελευταία δύο χρόνια ασχολείται ενεργά με την ανάπτυξη bots για την πλατφόρμα του Facebook Messenger σε NodeJS. Είναι δημιουργός του πρώτου ελληνικού bot για το Facebook, το “Πότε έρχεται το λεωφορείο μου”, που εξυπηρετεί πάνω από 10.000 χρήστες την εβδομάδα, και έχει βασικό ρόλο στην δημιουργία μερικών από τα μεγαλύτερα ελληνικά bots όπως τα bot του ΟΠΑΠ και του Πάμε Στοίχημα. Είναι IT Leader της EESTEC και ήταν μέλος του προεδρείου της Τοπικής Επιτροπής Αθήνας κατά την περίοδο 2015-2016."
  );
  setText("des_18_7", "Ιδέα και Ρίσκο");
  setText("des_18_7_2", "Ιδέα και Ρίσκο");
  setText(
    "des_18_8",
    "Στις 20 Ιανουαρίου 2018 η EESTEC Τ.Ε. Ξάνθης οργάνωσε μια σειρά ομιλιών με θέμα την επιχειρηματικότητα. Τα θέματα των ομιλιών είναι τα εξής:<br>•  ‘Μια ιδέα αξίζει, όσο οι άνθρωποι που την υποστηρίζουν’, Leonidas Skerletopoulos, Μarketing Strategist<br>•  ‘Ασφάλεια- Το επαγγελματικό ρίσκο του 21ου αιώνα’ , Therapon Fakas, Σύμβουλος Ανάπτυξης & Επικοινωνίας Business & Life Coach, συνεργάτης της ΔΑΣΤΑ ( Δομή Απασχόλησης Σταδιοδρομίας) του ΔΠΘ.<br>"
  );
  setText(
    "des_18_9",
    "Ο κ. Σκερλετόπουλος ανέπτυξε την ομιλία του γύρω από το θέμα “Μια ιδέα αξίζει, όσο οι άνθρωποι που την υποστηρίζουν”.”Η επιχειρηματική ιδέα είναι μια παρεξηγημένη έννοια. Η επικρατέστερη στάση είναι «Αν μοιραστώ την ιδέα μου θα μου την πάρουν», η οποία είναι κατά ένα μέρος ορθή μα όχι απόλυτα. Αν είσαι τυχερός θα σου πούνε και τη γνώμη τους. Αν έχεις μια νέα ιδέα και δεν την ανοίξεις στους πιθανούς αποδέκτες πώς θα κερδίσεις μια πρώτη άποψη; Από την άλλη πλευρά επικρατεί η εντύπωση ότι οι επιχειρηματίες πέτυχαν από την ιδέα τους. Σύμφωνα με έρευνες ανά τον κόσμο το 85% πέτυχαν βασισμένοι σε ιδέες άλλων ανθρώπων ενώ μόλις το 15% πάνω σε δικές τους ιδέες” αναφέρεται χαρακτηριστικά ως μέρος της ομιλίας του."
  );
  setText(
    "des_18_10",
    "Ο κ. Φάκας κινήθηκε με άξονα τις συνεχείς αλλαγές: “Ασφάλεια- το επαγγελματικό ρίσκο του 21ου αιώνα” είναι η θεματολογία του. 'Σε ένα διαρκώς μεταβαλλόμενο περιβάλλον υπάρχει 'χώρος' για εφησυχασμό ; Είναι η μέχρι τώρα επιτυχία ενός οργανισμού ικανή να εξασφαλίσει την και τη μελλοντική επιτυχία ή μήπως όχι ; Ποιες είναι οι προϋποθέσεις έτσι ώστε μια επιχείρηση να εξοπλιστεί κατάλληλα προκειμένου να μην αποτελέσει η ασφάλεια το μεγαλύτερο επαγγελματικό ρίσκο του 21ου αιώνα;' είναι μερικά από τα ερωτήματα πάνω στα οποία βασίστηκε η ομιλία του."
  );
  setText(
    "des_18_11",
    "Στόχος της ομιλίας ήταν η γνωριμία του φοιτητή με την αγορά εργασίας, η εξοικείωση του με τη λήψη αποφάσεων σε μια επιχείρηση και η αναγνώριση των δυνατοτήτων που προσφέρονται για να πραγματοποιηθεί μια ιδέα."
  );
  setText(
    "des_17_1",
    "Δημιουργία Επιχειρήσεων στην Ελλάδα και ειδικά στην Θράκη την Εποχή της Κρίσης"
  );
  setText(
    "makeactive2s",
    "Δημιουργία Επιχειρήσεων στην Ελλάδα και ειδικά στην Θράκη την Εποχή της Κρίσης"
  );
  setText(
    "des_17_2",
    "Στις 24 Μαΐου 2017 η EESTEC Τοπική Επιτροπή Ξάνθης διοργάνωσε μια ομιλία που θα παρουσίασε την επιχειρηματικότητα στην Θράκη, αλλά και στην Ελλάδα γενικότερα, την περιοδο της κρισης που διανυουμε."
  );
  setText(
    "des_17_3",
    "Ομιλητής ήταν ο κ. Πολιτόπουλος Δημήτρης, ιδρυτής της Ζυθοποιίας Μακεδονίας Θράκης, μιας εκ των μεγαλύτερων επιχειρήσεων στην Ελλάδα.<br>Οι παρευρισκόμενοι στην ομιλία είχαν την ευκαιρία να ενημερωθούν σχετικά με την κατάσταση της επιχειρηματικότητας στον τόπο μας, αλλά και για το πώς θα είναι σε θέση στο μέλλον να στήσουν μια δικιά τους, επιτυχημένη επιχείρηση."
  );
  setText(
    "des_17_4",
    "Παρουσίαση μεταπτυχιακών προγραμμάτων απο την KIC InnoEnergy"
  );
  setText(
    "des_17_4_2",
    "Παρουσίαση μεταπτυχιακών προγραμμάτων απο την KIC InnoEnergy"
  );
  setText(
    "des_17_4_3",
    "Παρουσίαση μεταπτυχιακών προγραμμάτων απο την KIC InnoEnergy"
  );
  setText(
    "makeactive5s",
    "Παρουσίαση μεταπτυχιακών προγραμμάτων απο την KIC InnoEnergy"
  );
  setText(
    "des_17_5",
    "Στις 14 Μαρτίου 2017 η EESTEC Τ.Ε. Ξάνθης διοργάνωσε μια ημερίδα ενημέρωσης μεταπτυχιακών προγραμμάτων που προσφέρει η InnoEnergy. H InnoEnergy ασχολείται με τον τομέα της ενέργειας, υποστηρίζει την καινοτομία και δίνει την ευκαιρία σε πρωτοπόρους και φιλόδοξους “εφευρέτες” να έρθουν σε επαφή με τη βιομηχανία και την αγορά για την υλοποίηση των ιδεών τους!"
  );
  setText(
    "des_17_6",
    "Η ημερίδα αποσκοπούσε στην ενημέρωση των φοιτητών για τα μεταπτυχιακά προγράμματα που προσφέρει η InnoEnergy Master School, η οποία ξεχωρίζει για το συνδυασμό μηχανικής και καινοτομίας. Οι φοιτητές, επιπλέον, ενημερώθηκαν για τα προνόμια και πλεονεκτήματα της InnoEnergy, ενώ παράλληλα πήραν μια ‘γεύση’ για τις μελλοντικές τους προοπτικές."
  );
  setText(
    "des_16_1",
    "Παρουσίαση του ευρωπαϊκού γραφείου διπλωμάτων ευρεσιτεχνίας στο ΔΠΘ"
  );
  setText(
    "makeactive3s",
    "Παρουσίαση του ευρωπαϊκού γραφείου διπλωμάτων ευρεσιτεχνίας στο ΔΠΘ"
  );
  setText(
    "des_16_2",
    "Στις 14 Μαΐου 2016, η Τ.Ε. Ξάνθης οργάνωσε σεμινάριο παρουσίασης του ευρωπαϊκού γραφείου διπλωμάτων ευρεσιτεχνίας. Ο Διευθυντής της Διεύθυνσης για την κατοχύρωση εφευρέσεων Λογισμικού (Search, Examination, Opposition of Software Inventions) του Ευρωπαϊκού Γραφείου Διπλωμάτων Ευρεσιτεχνίας (European Patent Office, www.epo.org ), κ. Γιάννης Σκουληκάρης θα παρουσιάσει τις δραστηριότητες του ΕΓΔΕ και τη δυνατότητα απασχόλησης σε αυτό Διπλωματούχων του Τμήματός μας.<br>Η εκδήλωση ενδιαφέρει τόσο Μεταπτυχιακούς, όσο και Προπτυχιακούς Φοιτητές, σαν μελλοντική προοπτική."
  );
  setText(
    "des_16_3",
    "Στις 14 Απριλίου του 2016 η Τ.Ε. Ξάνθης διοργάνωσε σεμινάριο με θέμα ‘Εισαγωγή στο Web Security’. Επίτιμοι ομιλητές ήταν o <a href='https://www.dionyziz.com/cv.html' target='_blank'>Διονύσης Ζήνδρος</a>, διδακτορικός φοιτητής του Εθνικού Καποδιστριακού Πανεπιστημίου Αθηνών, ειδικός σε θέματα κρυπτογραφίας και ασφάλειας υπολογιστών και o <a href='https://themicp.com/cv/' target='_blank'>Θέμης Παπαμελετίου</a>, φοιτητής Ηλεκτρολόγος Μηχανικός και Μηχανικών Υπολογιστών του Εθνικού Μετσόβιου Πολυτεχνείου."
  );
  setText(
    "des_16_4",
    "Στην ομιλία έγινε εισαγωγή στην Ασφάλεια Δικτύων, πάνω στα πρωτόκολλα HTTP/HTTPS, TLS στις τεχνικές injection code με SQL και στο scripting με XSS. Επίσης κατα την διάρκεια της παρουσίασης έγινε επίδειξη man-in-the-middle attack και ανάλυση πακέτων με το Wireshark."
  );
  setText(
    "des_16_5",
    "Τον Μάρτιο και τον Απρίλιο του 2016, η Τ.Ε. Ξάνθης διοργάνωσε μια σειρά διαλέξεων και εργαστηρίων με τον τίτλο 'JustApp', για την ανάπτυξη εφαρμογών για κινητά χρησιμοποιώντας web τεχνολογίες, οι οποίες θα ήταν συμβατές με όλα τα λειτουργικά συστήματα. Οι διαλέξεις έγιναν από επαγγελματίες προγραμματιστές και παρουσιάστηκαν τεχνικές ανάπτυξης σε πλατφόρμες όπως το Cordova και το Phonegap."
  );
  setText(
    "des_16_6",
    "Κατά την διάρκεια των σεμιναρίων, οι συμμετέχοντες αποκόμησαν την απαραίτητη γνώση πάνω στο Web Tool Development, με την άμεση καθοδήγηση του ομιλητή μέσα από διαλέξεις και hands-on training. Εξοικειώθηκαν με εργαλεία όπως το AngularJs για τις απαιτήσεις στην δόμηση του κώδικα, δούλεψαν πάνω στο front-end SDK μέσα από το Ionic Framework και εξέτασαν τεχνικές cloud storage/back-end με εργαλεία όπως Firebase και Amazon S3. Οι διαλέξεις ήταν φιλικές προς αρχάριους και με το τέλος του workshop οι συμμετέχοντες ήταν σε θέση να υλοποιήσουν την δική τους εφαρμογή."
  );
  setText(
    "des_16_7",
    "Στις 21 Ιανουαρίου η EESTEC LC Xanthi σε συνεργασία με τον καθηγητή κ. Παύλο Εφραιμίδη και την ερευνητική του ομάδα διοργάνωσαν σεμινάριο πρακτικού χαρακτήρα σχετικά με την εκμάθηση προγραμματισμού σε Android. Στην διάλεξη παρουσιάστηκαν έννοιες όπως τα Intents, τα User Interfaces και τέλος τα Permissions ενώ χρησιμοποιήθηκε και το Activity Lifecycle sample."
  );
  setText(
    "des_16_8",
    "Με το τέλος της διάλεξης θα πραγματοποιήθηκε η ημερίδα Android Open Day στα πλαίσια της οποίας έγινε ενημέρωση-παρουσίαση του EESTEC Competition For Android (ECA), ένος διεθνούς διαγωνισμού της EESTEC για ανάπτυξη εφαρμογών πάνω στην πλατφόρμα Android. Στα πλαίσια αυτού του διαγωνισμού, οι φοιτητές μπορούσαν να υποβάλλουν οποιαδήποτε ιδέα είχαν και να την υλοποιήσουν."
  );
  setText(
    "des_15_1",
    "Εφαρμόζοντας την Βιοϊατρική Τεχνολογία στην Κλινική Πράξη"
  );
  setText(
    "makeactive4s",
    "Εφαρμόζοντας την Βιοϊατρική Τεχνολογία στην Κλινική Πράξη"
  );
  setText(
    "des_15_2",
    "Στις 4 Δεκέμβρη του 2015, η EESTEC LC Xanthi διοργάνωσε ημερίδα με τίτλο: ‘Εφαρμόζοντας την Βιοϊατρική Τεχνολογία στην Κλινική Πράξη’. <br>Επίτιμη ομιλήτρια ήταν η κυρία Σπυρέττα Γολεμάτη, επίκουρη καθηγήτρια στο Τμήμα Ιατρικής του Εθνικού Καποδιστριακού Πανεπιστημίου Αθηνών στον τομέα της Βιοϊατρικής Τεχνολογίας. <br>Η ομιλία αφορούσε την σχέση της επιστήμης του Η.Μ.Μ.Υ με την Βιοϊατρική Τεχνολογία και την εφαρμογή της στην κλινική πράξη."
  );
  setText(
    "des_15_3",
    "Τον Νοέμβριο του 2015, η EESTEC Τ.Ε. Ξάνθης, σε συνεργασία με τον καθηγητή κ.Παύλο Εφραιμίδη και την ερευνητική του ομάδα οργάνωσαν μια σειρά διαλέξεων πρακτικού χαρακτήρα σχετικά με την εκμάθηση προγραμματισμού σε Android.<br> Το επίπεδο δυσκολίας απευθυνόταν σε αρχάριους προγραμματιστές, αλλά ήταν επιθυμητή η γνώση των γλωσσών Java και XML για την καλύτερη κατανόηση τους."
  );
  setText(
    "des_15_4",
    "Στις 16 και 17 Μαΐου του 2015, η Τ.Ε. Ξάνθης σε συνεργασία με το Ερευνητικό Κέντρο Αθηνά και το Εργαστήριο Ειδικής Μηχανολογίας του Δ.Π.Θ., διοργάνωσε διημερίδα με θέμα την γνωριμία με το περιβάλλον iOS, τις βασικές γνώσεις πριν την ανάπτυξη μιας εφαρμογής και τέλος τη δημιουργία μιας πρότυπης εφαρμογής από το μηδέν."
  );
  setText(
    "des_15_5",
    "Συγκεκριμένα όσοι παρευρέθηκαν στην εκδήλωση, απέκτησαν χρήσιμες γνώσεις και εμπειρίες πάνω σε αντικείμενα όπως το marketing μιας εφαρμογής, το monetizing, το performance metrics και φυσικά το development. <br>Κύριος ομιλητής ήταν ο Λάζαρος Βρύσης (Ηλεκτρολόγος Μηχανικός και υποψήφιος διδάκτωρ του ΑΠΘ), συνιδρυτής της Playcompass Entertainment."
  );
  setText("des_15_6", "Αποφοιτώ! Και μετά?");
  setText("des_15_6_2", "Αποφοιτώ! Και μετά?");
  setText(
    "des_15_7",
    "Τον Μάιο του 2015 πραγματοποιήθηκε η Ημερίδα “Αποφοιτώ! Και μετά? “ που διοργανώθηκε από την EESTEC LC Xanthi στα πλαίσια του “JobFair Athens 2015”. Ο στόχος της ήταν η σύνδεση του φοιτητή με την αγορά εργασίας μέσα από ομιλίες με χρήσιμες συμβουλές για την σύνταξη βιογραφικού και την διεξαγωγή συνέντευξης."
  );
  setText(
    "des_15_8",
    "Παράλληλα οι φοιτητές ενημερώθηκαν για την θέματα απασχόλησης στην έρευνα και την ανάπτυξη (R&D) αλλά και στη βιομηχανία. Ο κόσμος ανταποκρίθηκε στο κάλεσμα μας καθώς μετρήσαμε πάνω από 250 επισκέπτες απ’ όλα τα τμήματα της Πολυτεχνικής Σχολής της Ξάνθης.<br> Οι ομιλητές μας ήταν οι:"
  );
  setText(
    "des_15_9",
    "•  Ιντζέ Γεωργία : Στέλεχος Europe Direct Ξάνθης<br>•  Χαϊδοπούλου Αμαλία : Στέλεχος ΔΑΣΤΑ ΔΠΘ<br>•  Δημητριάδου Παρασκευή : Στέλεχος Europe D0irect Ξάνθης<br>•  Παυλίδης Γεώργιος : Research Director στο Ερευνητικό Κέντρο Αθηνά<br>•  Μουρούτσος Σπυρίδων : Αν. Καθηγητής του τμήματος ΗΜΜΥ του Δ.Π.Θ"
  );
  setText(
    "des_14_1",
    "Στις 8 Απριλίου του 2014, η KIC InnoEnergy σε συνεργασία με την EESTEC JLC Xanthi, διοργάνωσε ενημερωτικό σεμινάριο πάνω σε μεταπτυχιακά προγράμματα στον τομέα της ενέργειας. Η KIC InnoEnergy είναι ένα Ευρωπαϊκό Ινστιτούτο που στοχεύει στην ενίσχυση της εκπαίδευσης μέσω της σύνδεσης με την τεχνολογία, την αγορά και την επιχειρηματικότητα καθώς και στην καλλιέργεια πνεύματος καινοτομίας. Σκοπός του είναι να γίνει ένας από τους πρωτοπόρους καινοτομώντας στον τομέα της βιώσιμης (sustainable) ενέργειας. Στα πλαίσια αυτής της πρωτοβουλίας προσέφερε επτά 2ετή μεταπτυχιακά προγράμματα τα οποία θα πραγματοποιόντουσαν σε μια σειρά από μεγάλα Ευρωπαϊκά πανεπιστήμια (κάθε έτος σε διαφορετικό πανεπιστήμιο της επιλογής του σπουδαστή). <br>Τα προγράμματα αυτά ήταν:"
  );
  setText(
    "des_14_2",
    "<br>•  M.Sc. Clean Fossil and Alternative Fuels Energy<br>•  M.Sc. Energy Technologies<br>•  M.Sc. Environmental Pathways for Sustainable Energy Systems<br>•  M.Sc. Innovation in Nuclear Energy<br>•  M.Sc. Renewable Energies<br>•  M.Sc. Energy for Smart Cities<br>•  M.Sc. Smart Electrical Networks and Systems<br>"
  );
  setText(
    "des_14_3",
    "Η ενημέρωση πραγματοποιήθηκε από τον εκπρόσωπο του ινστιτούτου και μεταπτυχιακό φοιτητή του MSc. Energy Technologies, πρώην απόφοιτο του τμήματός μας Άγγελο Ρούσσο και αφορούσε το πρόγραμμα, τις προοπτικές καθώς και την προσωπική του εμπειρία τόσο στο χώρο αυτό όσο και γενικά σε σχέση με τις σπουδές στο εξωτερικό."
  );
  setText(
    "des_14_4",
    "Στις 5 και 6 Απριλίου του  2014 η EESTEC JLC Xanthi διοργάνωσε τοπικό workshop με τίτλο: ‘Rock the Bit’. <br>Στο woskhop, το θέμα του οποίου ήταν η προσομοίωση μουσικών οργάνων μέσω της πλατφόρμας Arduino, οι συμμετέχοντες είχαν τη δυνατότητα να υλοποιήσουν από το μηδέν μουσικά όργανα σε επίπεδο hardware και software. Η διάρκειά του ήταν 8 ώρες συνολικά και χωρίστηκε σε δύο μέρη."
  );
  setText(
    "des_13_1",
    "Στις 17 Δεκεμβρίου του 2013, η EESTEC JLC Ξάνθης διοργάνωσε το EESTEC Competition for Android (ECA), το οποίο ήταν ένας διεθνής διαγωνισμός της EESTEC πάνω στο Android App Development. <br>Ο διαγωνισμός Android της EESTEC, που διοργανώθηκε διεθνώς για τρίτη συνεχόμενη χρονιά και για πρώτη φορά στην Ξάνθη. Κάθε φοιτητής από όλη την Ευρώπη μπορούσε να συμμετέχει, να μάθει για την ανάπτυξη εφαρμογών σε Android και να εξασκηθεί. Το Android αποτελεί πλέον μεγάλο κομμάτι της καθημερινότητάς μας οπότε ο διαγωνισμός αυτός προσέφερε μια καλή ευκαιρία για ενασχόληση με αυτόν τον τομέα."
  );

  /* Past Boards */
  setText("boards", "Past Boards");
  setText(
    "board2021_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Ευάγγελος Σιδόπουλος"
  );
  setText(
    "board2021_2",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εσωτερικών Υποθέσεων:</b></strong> Ιωάννα Τσακαλίδου"
  );
  setText(
    "board2021_3",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εξωτερικών Υποθέσεων:</b></strong> Ιωάννης Τοτίδης"
  );
  setText(
    "board2021_4",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Στράτος Πολίτης"
  );
  setText(
    "board2021_5",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Γεώργιος Καραμανίδης"
  );
  setText(
    "board2020_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Ιωάννης Νάνης"
  );
  setText(
    "board2020_2",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εσωτερικών Υποθέσεων:</b></strong> Άννα Δάρδα"
  );
  setText(
    "board2020_3",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εξωτερικών Υποθέσεων:</b></strong> Περικλής Μαζαράκης"
  );
  setText(
    "board2020_4",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Αθανασία Τζώνη"
  );
  setText(
    "board2020_5",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Ιωάννης Ρούσσος"
  );
  setText(
    "board2019_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Γιώργος Κεφαλάς"
  );
  setText(
    "board2019_2",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εσωτερικών Υποθέσεων:</b></strong> Μικαέλα Τσακαλίδου"
  );
  setText(
    "board2019_3",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εξωτερικών Υποθέσεων:</b></strong> Νικολέτα Γερούση"
  );
  setText(
    "board2019_4",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Γιώργος Μπαλαμώτης"
  );
  setText(
    "board2019_5",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Δημήτρης Δεδεμάδης"
  );
  setText(
    "board2018_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Δέσποινα Φραγκουλίδου"
  );
  setText(
    "board2018_2",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εσωτερικών Υποθέσεων:</b></strong> Γιώργος Κρασσακόπουλος"
  );
  setText(
    "board2018_3",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εξωτερικών Υποθέσεων:</b></strong> Μαρία Δεμερτζή"
  );
  setText(
    "board2018_4",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Βασίλειος Κώνστας"
  );
  setText(
    "board2018_5",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Μιχάλης Φωτιάδης"
  );
  setText(
    "board2017_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Αναστασία Ιωαννίδου"
  );
  setText(
    "board2017_2",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εσωτερικών Υποθέσεων:</b></strong> Θανάσης Κωτσιόπουλος"
  );
  setText(
    "board2017_3",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εξωτερικών Υποθέσεων:</b></strong> Μαρίνα Σούλα"
  );
  setText(
    "board2017_4",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Γιώργος Σιαχάμης"
  );
  setText(
    "board2017_5",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Παναγιώτης Ανδρέου"
  );
  setText(
    "board2016_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Γιώργος Πέικος"
  );
  setText(
    "board2016_2",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εσωτερικών Υποθέσεων:</b></strong> Αποστόλης Αβερκιάδης"
  );
  setText(
    "board2016_3",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εξωτερικών Υποθέσεων:</b></strong> Διονύσης Φίλιππας"
  );
  setText(
    "board2016_4",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Μιλτιάδης Αλέξης"
  );
  setText(
    "board2016_5",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Αποστόλης Στεφανίδης"
  );
  setText(
    "board2015_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Θωδορής Ριζόπουλος"
  );
  setText(
    "board2015_2",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εσωτερικών Υποθέσεων:</b></strong> Κασσιανή Νικολοπούλου"
  );
  setText(
    "board2015_3",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εξωτερικών Υποθέσεων:</b></strong> Χρήστος Τραϊανός"
  );
  setText(
    "board2015_4",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Δάνης Δεσίπρης"
  );
  setText(
    "board2015_5",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Δήμητρα Φιλιππίδου"
  );
  setText(
    "board2014_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Χρήστος Πέτρου"
  );
  setText(
    "board2014_2",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εσωτερικών Υποθέσεων:</b></strong> Μαρία Κουνέλη"
  );
  setText(
    "board2014_3",
    "<strong style='color: red; font-size: 16px'><b>Αντιπρόεδρος Εξωτερικών Υποθέσεων:</b></strong> Νίκος Αναστασίου"
  );
  setText(
    "board2014_4",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Κυριάκος Μπακιρλής"
  );
  setText(
    "board2014_5",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Παναγιώτης Αρδαγγέλου"
  );
  setText(
    "board2013_1",
    "<strong style='color: red; font-size: 16px'><b>Πρόεδρος:</b></strong> Χριστίνα Σεμερτζίδου"
  );
  setText(
    "board2013_2",
    "<strong style='color: red; font-size: 16px'><b>Ταμίας:</b></strong> Γεωργία Θεοδοσιάδου"
  );
  setText(
    "board2013_3",
    "<strong style='color: red; font-size: 16px'><b>Υπεύθυνος Επικοινωνίας:</b></strong> Ελένη Κουμνιότη (Ιδρυτής Τοπικής Επιτροπής Ξάνθης)"
  );

  createCookie("lang", "GR");
}
