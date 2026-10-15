/* All site content lives in DATA. Edit text here; add photos by putting files in /images and setting img:"images/name.jpg". */
const G = "https://github.com/georgeyaccoup/", L = "https://lh3.googleusercontent.com/sitesv/";
const DATA = {
  heroImg: L + "AG8ngQUksI7VX0D4ZBD0Bph19Y3mC4XBQ2IQ4Oa_3spbFJx2Ruqm_hvBkowj27C7oqNLyuBNzd5lve2UFY71xZAx3myb2TYyVh1TkXMsEX422_W_pYGfpguga6C2uAlQSnejKQNLAEdzq-fim5EujP0DZZJ1ezpCQnBFt-NnPUZVPL5qdXi_sSKANNIhuomOCpW0r8EiTnZhIHVh0bDt022HLMl0uAE-k2zqEwkSRpV29_I=w1280",
  stats: [["125+","students taught directly"],["400+","learners reached by Tech Spot"],["38.7%","max simulated energy saving"],["6","industry internships"]],
  about: `<p>At 15 I taught myself C programming and electronics. By 16 I had finished my first embedded systems project, which showed me innovation can begin anywhere.</p>
  <p>My path is built on resilience, self-learning and service. I founded Tech Spot, a free academy, represented my university in robotics competitions, and earned a full USAID Scholars scholarship. I studied abroad at Temple University (USA), joined robotics labs, worked with PhD researchers and built a mini pupper robot that danced.</p>
  <ul><li>Mastered ROS2, embedded systems and robotics simulation.</li><li>Published research on energy optimization in robotics.</li><li>Interned with Siemens, ExxonMobil, Halliburton, Fab Lab Egypt and more.</li></ul>
  <p><b>My vision:</b> reduce robot power consumption with adaptive control, smart mechanical design and multi-layered ML, then build Egypt's first Robotics R&amp;D hub.</p>
  <p>Off the clock I mentor, compete in robotics challenges, play and watch soccer, play ping-pong and chess, and explore new cultures.</p>`,
  interests: ["Soft and bio-inspired robotics","Mobile robot navigation with ML","Marine robot navigation with ML","Robot energy consumption with deep learning","Medical robots and robot training","Safer, more general robot control with ML"],
  papers: [
    {t:"Optimizing Energy Consumption in Robotics Using Linear Regression for Control Parameter Prediction", d:"Published · March to September 2025", url:"https://ieeexplore.ieee.org/abstract/document/11384715", video:"3ToAt5vHuDQ",
     p:"We built a linear-regression predictive control approach that forecasts energy-optimal control parameters. In ROS2-Gazebo we simulated about 1,700 pick-and-place operations on a 6-DOF KUKA KR16 L6 under varying payloads, trajectories and control settings. Simulated energy use fell by 17.8% to 38.7% against baseline control with task performance maintained.",
     tags:["ROS2","Gazebo","Linear regression","KUKA KR16"], more:"I am now working with Dr. Abdallah Farage, Dr. Gmal Abdelnasser and Dr. Ahmed Saed to extend this paper with more advanced ML and control approaches."},
    {t:"Freezing desalination machine (Frozen Mind)", d:"Feb to July 2024 · Entrepreneur with CEI program, AUC and USAID", img: L + "AG8ngQVYXGuZ-fVhNb8tKk2brjq_Dfgnj10P-pOEJrkocuIE6R9MME11SyepnxkAxwDCDddW7YkF0Z4VW4H6-NrdIa4ovCrSfcJR-b6ijCrUxewC4Mb9cGsQTFD2vW54rVhjH3NFk6KlMRiBUolYfPFB0XbkbLOMMulyPoWTHBVUl9is4GntbQQAaniHKkOYVoTvCDJMlh6SM8vEYAoqCWJc1BsAe8C5O2ZyMBGooru_=w1280",
     p:"We designed and built a machine that produces 5 liters of clean water per hour and cut energy use by 18% against conventional methods. Our spray freezing system sprays saline droplets onto cooled surfaces to form pure ice while rejecting salt. It uses an R-134a refrigeration cycle with ethanol as the cooling medium, raised water recovery by 12%, and shows potential to exceed 80% with tuned parameters. I built skills in thermodynamics, mechanical design and STM32 programming.",
     tags:["Thermodynamics","STM32","Mechanical design"]},
    {t:"Solar-powered intelligent sorting and packaging of pears (graduation project)", d:"In progress · September 2025", img: L + "AG8ngQXdKpRz3xRP2mOp0BGYvKrLoenvcdqdfc1oR9TXtSHOPbbl9S0Yyl-evOhXFJxOcKl120RDQP1G5J07izNhNynj1iZl03Yy23kCNOwQLpcd_mujtowLmNwLAAxrOxmTELS8Q76Yyn3NCV8zlGM5jmQpN-iOH2FwNWzHmcZS4Kg3vsCQx2HiTSI8oqtUp77If4Bx2PSD6GXXBIq1bQfviZnZtEsI1U97VRp5WKCjF9w=w1280",
     p:"A solar-powered machine that sorts pears by size mechanically, finds defects and infections with computer vision, and packs them with two robotic arms: one builds a premium top layer of large pears, the other fills lower layers. It combines automation, PLCs, IoT and ROS-based control to support smart farming in Egypt.",
     more:"<b>Autonomous vision-based system.</b> A Jetson Nano pipeline detects pears with HSV, LAB and BGR histograms (96% detection accuracy), screens infections with a TensorFlow CNN, and estimates mass from an Intel RealSense D455 point cloud with an online-trained linear regression (86% accuracy). Entry and exit timestamps give conveyor velocity, closing a feedback loop between conveyor speed, vision latency and the robotic arm. Testing showed zero critical failures across integrated sorting and packaging cycles.",
     tags:["Jetson Nano","RealSense D455","TensorFlow","ROS","PLC","IoT"]}
  ],
  cats: ["All","Robotics","Automation","Mechanical","Embedded"],
  projects: [
    {t:"Solar fruit sorting and packing (SAAT)",c:"Robotics",p:"Vision AI on a Jetson Nano with depth camera, PID and MPC control, 98% accuracy and mass, volume, surface area and size estimates. The vision system drives 4 feedback loops across 2 conveyors, 6 servos and a robotic arm. I also fabricated the 3D-printed gripper, mounts and camera housings, and designed a 12-cup pneumatic vacuum gripper with a fail-safe normally closed valve.",img: L + "AG8ngQXdKpRz3xRP2mOp0BGYvKrLoenvcdqdfc1oR9TXtSHOPbbl9S0Yyl-evOhXFJxOcKl120RDQP1G5J07izNhNynj1iZl03Yy23kCNOwQLpcd_mujtowLmNwLAAxrOxmTELS8Q76Yyn3NCV8zlGM5jmQpN-iOH2FwNWzHmcZS4Kg3vsCQx2HiTSI8oqtUp77If4Bx2PSD6GXXBIq1bQfviZnZtEsI1U97VRp5WKCjF9w=w1280"},
    {t:"Walle, semi-humanoid robot",c:"Robotics",p:"ROS 2 robot that takes voice commands and decides with AI, using OpenAI Whisper for speech-to-text and the ChatGPT API. Raspberry Pi 4, ESP32, head and hand servos, wheel motors.",links:[["ROS2",G+"Walle_ROS2"],["ESP32",G+"Walle_ESP32"]]},
    {t:"Red Dot Shooter",c:"Robotics",p:"ROS 2 nodes detect a red object, compute coordinates, apply inverse kinematics and drive stepper motors with PID. Python and C++.",links:[["Code",G+"Dot_tracker"]]},
    {t:"FocusOne, 6-DOF arm",c:"Robotics",p:"A 6-DOF robot moves two 200 kg packages. Built with ROS2, Gazebo, MoveIt, SolidWorks, MATLAB and Ansys.",links:[["Code",G+"Focus_one_robot"]]},
    {t:"Mini pupper line follower",c:"Robotics",p:"First ROS2 project in Dr. Li Bai's ROS course at Temple University: the camera detects a black line and sends commands to 3 servos per leg. Later extended with reinforcement learning.",links:[["LinkedIn","https://www.linkedin.com/posts/george-yaccoup_templeuniversity-robotics-ros2-activity-7256689153940086784-Zsu-"]]},
    {t:"PID autonomous car",c:"Robotics",p:"Arduino Uno with PID control searches for an object using an ultrasonic sensor on a servo and L298N-driven DC motors. MATLAB for responses, Proteus for simulation.",links:[["Code",G+"PID_Autonoums_Car"]]},
    {t:"Humanoid robot joint and self-driving car",c:"Robotics",p:"Modelling and control work, with more being added as projects get documented."},
    {t:"Robot arm, two production lines",c:"Automation",p:"PLC automation of two assembly lines with a robotic arm moving products from line 1 to line 2.",links:[["Code",G+"Production_Line_Boxs"]]},
    {t:"Sorting and assembler line",c:"Automation",p:"PLC automation, hydraulic pushers for sorting and a robotic arm for assembly.",links:[["Code",G+"Assembler-"]]},
    {t:"Box-size sorter",c:"Automation",p:"A production line that classifies boxes by size, built mainly with a PLC.",links:[["Code",G+"Sorter"]]},
    {t:"Color classifier",c:"Automation",p:"Five production lines with a sorter, two robotic arms and a color sensor, controlled by a PLC.",links:[["Code",G+"Product_color_sorting-"]]},
    {t:"Microwave development",c:"Embedded",p:"PIC microcontroller with DIO, PWM, Timer0, Timer1, ADC and an RTOS, plus a SolidWorks and AutoCAD mechanical design. Vibration came out 20% lower than local machines.",links:[["LinkedIn","https://www.linkedin.com/posts/george-yaccoup_pic-embedded-microcontroller-activity-7220053151427514368-cR_g"]]},
    {t:"Washing machine",c:"Embedded",p:"Dual PIC18F4620 controllers, LCD and 7-segment displays, encoders, a 1 HP motor and drivers for DIO, UART, ADC, PWM, CCP1 and timers, with full mechanical design (shaft, weldment, pulleys, belts, tank).",links:[["Electrical","https://lnkd.in/dvPup8BM"],["Mechanical","https://lnkd.in/dT99Bv6C"]]},
    {t:"ATM software (Qt)",c:"Embedded",p:"ATM interface software built with Qt.",links:[["Code",G+"ATM_LCD"]]},
    {t:"Students database",c:"Embedded",p:"C and embedded real-time systems project.",links:[["Code",G+"STudentDatabase-"]]},
    {t:"AVR timer",c:"Embedded",p:"AVR timer project with unarranged-pin 7-segment display.",links:[["Code",G+"unarranged_pins_7seg"]]},
    {t:"Railway stress study",c:"Mechanical",p:"A real-life project where I ran simulations and mechanical tests in SolidWorks and Ansys. The railway has 6 main layers plus 3 extra layers developed from my three-month study."},
    {t:"Sorting machine and vision mechanism (SolidWorks)",c:"Mechanical",p:"Drawing, designing and assembling the graduation machine and a camera-and-servo selection mechanism using Raspberry Pi 4, ESP32 and 6 servos, 3D printed."},
    {t:"Processor fins and heat stress",c:"Mechanical",p:"Heat stress analysis of different fin materials to find functionality and failure points.",links:[["Files","https://drive.google.com/drive/folders/11sZOEk8O-I8Na57mFeqF4bpyZXxpZyyt"]]},
    {t:"Stair-climbing wheelchair",c:"Mechanical",p:"A SolidWorks mechanism designed to run automatically without human force.",links:[["Files","https://drive.google.com/drive/folders/1SldUnhe4A8hiBlvUFlCABiwFRiX6wcqo"]]},
    {t:"Gearbox and 12-cup suction gripper",c:"Mechanical",p:"A gearbox that cuts force by 20% and raises speed by 50%, and a 12-cup suction gripper."},
    {t:"Ansys simulations",c:"Mechanical",p:"Air resistance on a large track, aircraft simulation, and stress on a metal sheet with Ansys APDL."},
    {t:"Hockey-stick recycling machine",c:"Mechanical",p:"Mechanical and logic design for a local company recycling wooden products."},
    {t:"CNC and Fusion 360",c:"Mechanical",p:"LEGO design and injection molding in Fusion 360, a bottle opener milled on CNC and a chess bishop turned on CNC.",links:[["Files","https://drive.google.com/drive/folders/1odreHy7SPGT82V80PmbRiI9rwPT33UkK"]]},
    {t:"Simple bridge",c:"Mechanical",p:"My first engineering project: a miniature bridge model.",links:[["LinkedIn","https://www.linkedin.com/posts/george-yaccoup_this-model-is-a-miniature-bridge-or-miniature-activity-6909160142076846080-vlgE"]]}
  ],
  jobs: [
    ["Tech Spot, Founder and instructor","Jan 2023 to present","Taught ICDL, Python, C/C++ and robotics, training 125 students directly while the academy reached over 400 learners. After a 2023 government push left many older community members at risk of unemployment for lack of computer skills, I turned my home into a classroom."],
    ["Fab Lab Egypt, Fab engineer","11 Aug to 20 Sep 2025","Designed and made 3D parts with 3D printers, laser cutters and CNC machines, and worked on an interactive humanoid robot that completes tasks and reports results."],
    ["HA Consultation Group","30 Jun to 15 Aug 2025","Real-time classic control projects: design and simulation in CADe and AKTS, PLC programs, motor driver selection and Eplan documentation, with more than 60 projects designed and executed."],
    ["DCS (Devash Control Systems), Siemens partner","July 2024","Designed HV, MV and LV electrical panels and cut energy waste through digitalization, raising panel effectiveness above 83%. Trained in panel manufacturing, SCADA and PLC automation at the Elsadat factory."],
    ["Siemens, Embedded systems intern","Jun to Oct 2023","Programmed AVR and ARM microcontrollers with Siemens RTOS and AUTOSAR for rail automation, and worked on a method to bring response time under 1 microsecond."],
    ["ExxonMobil Egypt","27 Aug to 30 Sep 2023","Rotations at 10th of Ramadan, Mostorod Terminal and Alexandria covering operations, energy production and distribution."],
    ["Halliburton, Sperry Drilling","August 2023","Hands-on work with LWD, MWD and iCruise drilling automation, with mentor Eng. George Baher."],
    ["SemiColon, Cairo","July 2023","AVR (ATmega32) and ARM (STM32) training: DIO, ADC, interrupts, timers, UART, SPI, I2C, NVIC, RTOS and SysTick."]
  ],
  skills: {
    "Robotics":["ROS2 (Python, C++)","ESP32","Arduino","Raspberry Pi 4 and 5","Jetson Nano","RViz","Gazebo","MuJoCo","URDF","Kinematics and dynamics","Trajectory generation","A*, RRT, RRT*"],
    "AI and ML":["Reinforcement learning","Linear and logistic regression","Neural networks","OpenCV and image processing"],
    "Programming":["Python","C/C++","Embedded C","Java","MySQL","MATLAB","Qt Creator","LabVIEW"],
    "Embedded systems":["AVR","PIC","ARM","Arduino","RTOS","AUTOSAR"],
    "Mechanical design":["SolidWorks","Ansys (Fluent, Mechanical, APDL)","AutoCAD","Fusion 360","HVAC with HAP","MasterCam CNC"],
    "Electrical and PCB":["Altium","Proteus","KiCad","Circuit design and simulation"],
    "Automation and control":["Classic control (CADe, AKTS)","PLC (LogixPro, TIA, Factory I/O)","Eplan panels","PID and MPC"],
    "Non-technical":["Team player and leader","Research mindset","Dedicated and hard-working","Resilience and growth mindset"]
  },
  community: [
    ["Matrix MU","Guided 60 students in embedded systems over two years, coached a team to 1st place in the Creativa competition, and trained 30 more students."],
    ["Green Assiut University Initiative","HR leader and program coordinator across two cohorts that trained about 200 students in sustainable living and the SDGs."],
    ["Enactus AU","HR leader for 50+ students for two years, and created an evaluation criterion that helped the team win local and global competitions."],
    ["ASME AU","Monitor and technical team member supporting international competitions such as XRC."],
    ["Assiut Robotics","Worked on an ROV and learned C, electronics, ROS and embedded systems. Learned ROS in one month for my first ROV competition and won 3rd place as a freshman."],
    ["USAID Scholars camps, head of volunteers","Across 3 winter and summer camps, led logistics for 140+ students with 5 other leaders."]
  ],
  decks: ["Forsaken Places Portfolio","Robotics Recreations","Robot Vision","AI Chatting","Supply Chain","Lean Manufacturing","Conference Presentation (IEEE paper)","Pneumatic Gripper Systems Engineering","MicroRobotics","Sensors","Wind Turbines","Processors vs Human Brains","Happy World Water Life","Vehicles","Computers"]
};

const $ = (s, r = document) => r.querySelector(s), el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };
const tags = (a) => a ? `<ul class="tags">${a.map(x => `<li>${x}</li>`).join("")}</ul>` : "";

/* nav */
const secs = [["about","About"],["research","Research"],["projects","Projects"],["experience","Experience"],["skills","Skills"],["community","Community"],["presentations","Talks"],["contact","Contact"]];
$("#links").innerHTML = secs.map(([i, n]) => `<a href="#${i}">${n}</a>`).join("");
$("#menu").onclick = () => { const o = $("#links").classList.toggle("open"); $("#menu").setAttribute("aria-expanded", o); };
$("#links").onclick = () => $("#links").classList.remove("open");

/* hero + about */
$("#heroImg").src = DATA.heroImg;
$("#stats").innerHTML = DATA.stats.map(([n, l]) => `<li><b>${n}</b><span>${l}</span></li>`).join("");
$("#aboutText").innerHTML = DATA.about;

/* research */
$("#researchBox").innerHTML = `<p class="sub">Research interests</p>${tags(DATA.interests)}` + DATA.papers.map(x => `
  <article class="paper"><h3>${x.t}</h3><p class="meta">${x.d}</p>
  ${x.img ? `<img src="${x.img}" alt="${x.t}" loading="lazy" style="width:100%;border-radius:10px;margin-bottom:12px">` : ""}
  <p>${x.p}</p>${tags(x.tags)}
  ${x.more ? `<details><summary>More detail</summary><p>${x.more}</p></details>` : ""}
  ${x.url ? `<p><a href="${x.url}" target="_blank" rel="noopener">Read the paper on IEEE Xplore</a></p>` : ""}
  ${x.video ? `<div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${x.video}" title="Conference presentation" loading="lazy" allowfullscreen></iframe></div>` : ""}</article>`).join("");

/* projects */
const grid = $("#grid"), filters = $("#filters");
function draw(cat) {
  filters.innerHTML = DATA.cats.map(c => `<button role="tab" class="${c === cat ? "on" : ""}" aria-selected="${c === cat}">${c}</button>`).join("");
  grid.innerHTML = "";
  DATA.projects.filter(p => cat === "All" || p.c === cat).forEach(p => grid.append(el(`
    <article class="card">${p.img ? `<div class="ph"><img src="${p.img}" alt="${p.t}" loading="lazy"></div>` : ""}
    <div class="bd"><h3>${p.t}</h3><p>${p.p}</p>
    <div class="links">${(p.links || []).map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("")}</div></div></article>`)));
}
filters.onclick = e => e.target.tagName === "BUTTON" && draw(e.target.textContent);
draw("All");
const lb = $("#lb");
grid.onclick = e => { if (e.target.tagName === "IMG") { $("img", lb).src = e.target.src; lb.hidden = false; } };
lb.onclick = () => lb.hidden = true;
document.onkeydown = e => e.key === "Escape" && (lb.hidden = true);

/* experience, skills, community, talks */
$("#timeline").innerHTML = DATA.jobs.map(([t, w, p]) => `<li><h3>${t}</h3><span class="when">${w}</span><p>${p}</p></li>`).join("");
$("#skillsBox").innerHTML = Object.entries(DATA.skills).map(([k, v]) => `<div><h3>${k}</h3>${tags(v)}</div>`).join("");
$("#communityBox").innerHTML = DATA.community.map(([t, p]) => `<div><h3>${t}</h3><p>${p}</p></div>`).join("");
$("#presBox").innerHTML = `<p class="sub">Over 50 presentations in five years, from academic talks to pitch decks and project demos. Slide files and my transcript are linked from the previous site until they are added to this repository.</p><ul class="files">${DATA.decks.map(d => `<li>${d}</li>`).join("")}</ul>`;

/* theme + scroll spy */
const root = document.documentElement, tb = $("#theme");
const setTheme = t => { root.dataset.theme = t; tb.textContent = t === "dark" ? "Light" : "Dark"; try { localStorage.setItem("t", t); } catch (e) {} };
let saved; try { saved = localStorage.getItem("t"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"));
tb.onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) document.querySelectorAll("#links a").forEach(a => a.classList.toggle("on", a.hash === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
secs.forEach(([i]) => io.observe(document.getElementById(i)));
$("#yr").textContent = new Date().getFullYear();
