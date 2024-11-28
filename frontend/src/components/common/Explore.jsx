import React from "react";
  import './Explore.css'; // Import the CSS file

const Explore = () => {
  const features = [
    {
      title: "Reminders",
      description: "Don’t let your students forget a date and time for a lesson or course. Remind them where they need to be in time to get there with automated and customisable reminders.",
      icon: "🔔",
    },
    {
      title: "Calendar Sync",
      description: "Don’t let teaching and meeting times clash with your personal life and vacation time, synchronize your personal and professional calendars to avoid double booking yourself. Each teacher can sync their personal calendars with their teaching schedules.",
      icon: "📅",
    },
    {
      title: "Intake Forms",
      description: "If you need student or pupil information before they join your classes, you can request and create lesson-specific intake forms to ensure they are taking the most appropriate course.",
      icon: "📝",
    },
    {
      title: "Kiosk",
      description: "Let your students book themselves into available classes on-site with a security enhanced kiosk terminal. They can log in and join a class at your kiosk terminal, the system will forget all of their details and login information when they have finished.",
      icon: "🏢",
    },
    {
      title: "Code Colours for Teachers",
      description: "Create colour-coordinated schedules for your teaching staff to more easily identify upcoming lessons, and overloaded schedules.",
      icon: "🎨", 
    },
    {
      title: "Group Booking",
      description: "Allow companies and organisations to group book important courses and seminars for multiple staff members with the Group Bookings feature.",
      icon: "👥",
    },
    {
      title: "Daily Reports",
      description: "Maintain detailed daily reports on your teaching schedule and external meeting, get it all on a report created for a daily overview of your trainer schedules.",
      icon: "📊",
    },
    {
      title: "Cancellation Policy",
      description: "Don’t get stuck with empty and unpaid seats in your classes that you can’t fill. Ensure that your students know the cancellation policy and how long they need to give notice of non-attendance.",
      icon: "📄",
    },
    {
        title: "Study Session Cancellation Policy",
        description: "To maintain an effective learning environment, it's important that students are aware of the cancellation policy for study sessions. Ensure that students understand how much notice they need to provide if they cannot attend a scheduled session, so that time can be allocated to others who may need it.",
        icon: "📚"
    },
    {
        title: "Teacher Cancellation Policy",
        description: "To ensure smooth class management, it's crucial for teachers to communicate the cancellation policy clearly. Make sure students understand how much notice they need to provide if they cannot attend, allowing teachers to adjust their plans and accommodate other learners effectively.",
        icon: "👩‍🏫"
    }
  ];

  return (
    <div className="explore-container ">
      <h2 className="explore-title">
        Why SimplyBook.me is <span className="text-blue-1000">an ideal fit</span> for your educational and training businesses scheduling
      </h2>
      <div className="explore-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <a href="/" className="explore-link">
        See All System Features ➡
      </a>
    </div>
  );
};

export default Explore;