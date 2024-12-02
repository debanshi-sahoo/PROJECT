// import React from 'react';
// const Main = () => {
//     return (
//         <main>
//             <Section id="register/login" title="Register/Login" icon="register/login" description="Create your account or Login to your existing account." />
//             <Section id="events" title="Event Management" icon="calendar-check" description="Stay informed about upcoming events, class schedules, and faculty availability." />
//             <Section id="question-paper" title="Question Paper Generation" icon="file-alt" description="Create and share question papers with ease using our templates and question banks." />
//             <Section id="file-sharing" title="File Sharing" icon="share-alt" description="Collaborate with fellow faculty members by sharing resources and materials." />
//             <Section id="resources" title="Resources" icon="book" description="Access a variety of teaching materials and research resources." />
//             <Section id="faculty-profiles" title="Faculty Profiles" icon="user-graduate" description="Explore faculty members' profiles and their research interests." />
//         </main>
//     );
// };

// const Section = ({ id, title, icon, description }) => {
//     return (
//         <section id={id} className="card">
//             <h2><i className={`fas fa-${icon}`}></i> {title}</h2>
//             <p>{description}</p>
//             <button><i className="fas fa-eye"></i> View</button>
//             <button><i className="fas fa-plus-circle"></i> Join</button>
//         </section>
//     );
// };

// export default Main;

// import React from 'react';

// const Main = () => {
//     // Card data for the Home section
//     const cards = [
//         { title: "Card 1", description: "This is the first card." },
//         { title: "Card 2", description: "This is the second card." },
//         { title: "Card 3", description: "This is the third card." },
//         { title: "Card 4", description: "This is the fourth card." },
//         { title: "Card 5", description: "This is the fifth card." },
//         { title: "Card 6", description: "This is the sixth card." },
//     ];

//     return (
//         <main>
//             {/* Welcome Section */}
//             <div className="home-container">
//                 <h2>Welcome to the Faculty Collaboration Platform</h2>
//                 <div className="card-grid">
//                     {cards.map((card, index) => (
//                         <div key={index} className="card">
//                             <h3>{card.title}</h3>
//                             <p>{card.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Additional Sections */}
//             <Section id="register/login" title="Register/Login" icon="user" description="Create your account or Login to your existing account." />
//             <Section id="events" title="Event Management" icon="calendar-check" description="Stay informed about upcoming events, class schedules, and faculty availability." />
//             <Section id="question-paper" title="Question Paper Generation" icon="file-alt" description="Create and share question papers with ease using our templates and question banks." />
//             <Section id="file-sharing" title="File Sharing" icon="share-alt" description="Collaborate with fellow faculty members by sharing resources and materials." />
//             <Section id="resources" title="Resources" icon="book" description="Access a variety of teaching materials and research resources." />
//             <Section id="faculty-profiles" title="Faculty Profiles" icon="user-graduate" description="Explore faculty members' profiles and their research interests." />
//         </main>
//     );
// };

// const Section = ({ id, title, icon, description }) => {
//     return (
//         <section id={id} className="card">
//             <h2><i className={`fas fa-${icon}`}></i> {title}</h2>
//             <p>{description}</p>
//             <button><i className="fas fa-eye"></i> View</button>
//             <button><i className="fas fa-plus-circle"></i> Join</button>
//         </section>
//     );
// };

// export default Main;

import React from 'react';

const Main = () => {
    return (
        <main>
            {/* Welcome Section */}
            <div className="home-container">
                <h2>Welcome to the Faculty Collaboration Platform</h2>
            </div>

            {/* Additional Sections */}
            <Section
                id="register/login"
                title="Register/Login"
                icon="user"
                description="Create your account or Login to your existing account."
            />
            <Section
                id="events"
                title="Event Management"
                icon="calendar-check"
                description="Stay informed about upcoming events, class schedules, and faculty availability."
            />
            <Section
                id="question-paper"
                title="Question Paper Generation"
                icon="file-alt"
                description="Create and share question papers with ease using our templates and question banks."
            />
            <Section
                id="file-sharing"
                title="File Sharing"
                icon="share-alt"
                description="Collaborate with fellow faculty members by sharing resources and materials."
            />
            <Section
                id="resources"
                title="Resources"
                icon="book"
                description="Access a variety of teaching materials and research resources."
            />
            <Section
                id="faculty-profiles"
                title="Faculty Profiles"
                icon="user-graduate"
                description="Explore faculty members' profiles and their research interests."
            />
        </main>
    );
};

const Section = ({ id, title, icon, description }) => {
    return (
        <section id={id} className="card">
            <h2>
                <i className={`fas fa-${icon}`}></i> {title}
            </h2>
            <p>{description}</p>
            <button>
                <i className="fas fa-eye"></i> View
            </button>
            <button>
                <i className="fas fa-plus-circle"></i> Join
            </button>
        </section>
    );
};

export default Main;
