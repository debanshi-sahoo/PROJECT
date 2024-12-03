// import React from 'react';
// import { Link } from 'react-router-dom';

// const Main = () => {
//   return (
//     <main>
//       {/* Welcome Section */}
//       <div className="home-container">
//         <h2 style={{ color: "white" }}>Welcome to the Faculty Collaboration Platform</h2>
//       </div>

//       {/* Sections in a Grid */}
//       <div className="grid-container">
//         {/* Register/Login Section with Custom Buttons */}
//         <Section
//           id="register-login"
//           title="Register/Login"
//           icon="user"
//           description="Create your account or Login to your existing account."
//           customButtons={[
//             { label: "Register", link: "/register" },
//             { label: "Login", link: "/login" }
//           ]}
//         />

//         {/* Event Management Section */}
//         <Section
//           id="events"
//           title="Event Management"
//           icon="calendar-check"
//           description="Stay informed about upcoming events, class schedules, and faculty availability."
//         />

//         {/* Question Paper Generation Section */}
//         <Section
//           id="question-paper"
//           title="Question Paper Generation"
//           icon="file-alt"
//           description="Create and share question papers with ease using our templates and question banks."
//         />

//         {/* File Sharing Section */}
//         <Section
//           id="file-sharing"
//           title="File Sharing"
//           icon="share-alt"
//           description="Collaborate with fellow faculty members by sharing resources and materials."
//         />

//         {/* Resources Section */}
//         <Section
//           id="resources"
//           title="Resources"
//           icon="book"
//           description="Access a variety of teaching materials and research resources."
//         />

//         {/* Faculty Profiles Section */}
//         <Section
//           id="faculty-profiles"
//           title="Faculty Profiles"
//           icon="user-graduate"
//           description="Explore faculty members' profiles and their research interests."
//         />
//       </div>
//     </main>
//   );
// };

// // Section Component with Custom Buttons and Default Button Functionality
// const Section = ({ id, title, icon, description, customButtons }) => {
//   return (
//     <section id={id} className="card">
//       <h2>
//         <i className={`fas fa-${icon}`}></i> {title}
//       </h2>
//       <p>{description}</p>
//       <div className="button-container">
//         {customButtons ? (
//           customButtons.map((button, index) => (
//             <Link to={button.link} key={index}>
//               <button>{button.label}</button>
//             </Link>
//           ))
//         ) : (
//           <>
//             <button>
//               <i className="fas fa-eye"></i> View
//             </button>
//             <button>
//               <i className="fas fa-plus-circle"></i> Join
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Main;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Main = () => {
//   return (
//     <main>
//       {/* Welcome Section */}
//       <div className="home-container">
//         <h2 style={{ color: "white" }}>Welcome to the Faculty Collaboration Platform</h2>
//       </div>

//       {/* Sections in a Grid */}
//       <div className="grid-container">
//         <Section
//           id="register-login"
//           title="Register/Login"
//           icon="user"
//           description="Create your account or Login to your existing account."
//           customButtons={[
//             { label: "Register", link: "/register" },
//             { label: "Login", link: "/login" }
//           ]}
//         />
//         <Section
//           id="events"
//           title="Event Management"
//           icon="calendar-check"
//           description="Stay informed about upcoming events, class schedules, and faculty availability."
//           customButtons={[
//             { label: "View Events", link: "/events" },
//             { label: "Join Event", link: "/join-event" }
//           ]}
//         />
//         <Section
//           id="question-paper"
//           title="Question Paper Generation"
//           icon="file-alt"
//           description="Create and share question papers with ease using our templates and question banks."
//           customButtons={[
//             { label: "Generate Paper", link: "/generate-paper" }
//           ]}
//         />
//         <Section
//           id="file-sharing"
//           title="File Sharing"
//           icon="share-alt"
//           description="Collaborate with fellow faculty members by sharing resources and materials."
//           customButtons={[
//             { label: "Share File", link: "/share-file" }
//           ]}
//         />
//         <Section
//           id="resources"
//           title="Resources"
//           icon="book"
//           description="Access a variety of teaching materials and research resources."
//           customButtons={[
//             { label: "Access Resources", link: "/resources" }
//           ]}
//         />
//         <Section
//           id="faculty-profiles"
//           title="Faculty Profiles"
//           icon="user-graduate"
//           description="Explore faculty members' profiles and their research interests."
//           customButtons={[
//             { label: "View Profiles", link: "/profiles" }
//           ]}
//         />
//       </div>
//     </main>
//   );
// };

// const Section = ({ id, title, icon, description, customButtons }) => {
//   return (
//     <section id={id} className="card">
//       <h2>
//         <i className={`fas fa-${icon}`}></i> {title}
//       </h2>
//       <p>{description}</p>
//       <div className="button-container">
//         {customButtons && customButtons.length > 0 ? (
//           customButtons.map((button, index) => (
//             <Link to={button.link} key={index}>
//               <button className="btn">{button.label}</button>
//             </Link>
//           ))
//         ) : (
//           <>
//             <button className="btn">
//               <i className="fas fa-eye"></i> View
//             </button>
//             <button className="btn">
//               <i className="fas fa-plus-circle"></i> Join
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Main;

import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      {/* Welcome Section */}
      <div className="home-container">
        <h2 style={{ color: "white" }}>Welcome to the Faculty Collaboration Platform</h2>
      </div>

      {/* Sections in a Grid */}
      <div className="grid-container">
        <Section
          id="register-login"
          title="Register/Login"
          icon="user"
          description="Create your account or Login to your existing account."
          customButtons={[
            { label: "Register", link: "/register" },
            { label: "Login", link: "/login" }
          ]}
        />
        <Section
          id="events"
          title="Event Management"
          icon="calendar-check"
          description="Stay informed about upcoming events, class schedules, and faculty availability."
          customButtons={[
            { label: "View Events", link: "/events" },
            { label: "Join Event", link: "/join-event" }
          ]}
        />
        <Section
          id="question-paper"
          title="Question Paper Generation"
          icon="file-alt"
          description="Create and share question papers with ease using our templates and question banks."
          customButtons={[
            { label: "Generate Paper", link: "/generate-paper" } // Dynamically created link for question paper generation
          ]}
        />
        <Section
          id="file-sharing"
          title="File Sharing"
          icon="share-alt"
          description="Collaborate with fellow faculty members by sharing resources and materials."
          customButtons={[
            { label: "Share File", link: "/share-file" }
          ]}
        />
        <Section
          id="resources"
          title="Resources"
          icon="book"
          description="Access a variety of teaching materials and research resources."
          customButtons={[
            { label: "Access Resources", link: "/resources" }
          ]}
        />
        <Section
          id="faculty-profiles"
          title="Profiles"
          icon="user-graduate"
          description="Explore members' profiles and their research interests."
          customButtons={[
            { label: "View Profiles", link: "/profiles" }
          ]}
        />
      </div>
    </main>
  );
};

// Section component to handle individual sections dynamically
const Section = ({ id, title, icon, description, customButtons }) => {
  return (
    <section id={id} className="card">
      <h2>
        <i className={`fas fa-${icon}`}></i> {title}
      </h2>
      <p>{description}</p>
      <div className="button-container">
        {/* If custom buttons exist, loop through them and render */}
        {customButtons && customButtons.length > 0 ? (
          customButtons.map((button, index) => (
            <Link to={button.link} key={index}>
              <button className="btn">{button.label}</button>
            </Link>
          ))
        ) : (
          <>
            <button className="btn">
              <i className="fas fa-eye"></i> View
            </button>
            <button className="btn">
              <i className="fas fa-plus-circle"></i> Join
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default Main;