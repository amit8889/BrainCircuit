import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
const GroupCard = ({ groupId }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when the card comes into view
    threshold: 0.3, // When 30% of the card is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-1000 ease-in-out transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="rounded-lg bg-white shadow-xl border border-gray-200 p-6 m-4 relative overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-1">
        {/* Green Ping Animation */}
        <div
          className={`absolute top-1 right-1 w-6 h-6 rounded-full ${
            inView ? "animate-ping opacity-70" : "opacity-0"
          }`}
          style={{
            backgroundColor: "var(--green-color)", // Using green color from CSS variable
          }}
        />

        {/* Icon and Topic */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src="https://via.placeholder.com/40/ffcc00/ffffff?text=JS"
            alt="Group Name"
            className="w-12 h-12 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
          />
          <div>
            <h3 className="text-1xl font-semibold text-gray-900 tracking-tight">
              JavaScript
            </h3>
            <p className="text-sm text-gray-600">Frontend Development</p>
          </div>
        </div>

        {/* Card Content */}
        <div className="mb-4">
          <p className="text-gray-700 text-md leading-relaxed">
            Join the discussion and share your knowledge on JavaScript. Connect
            with other enthusiasts and learn together!
          </p>
        </div>

        <Link to={`join-group/${groupId}`}>
          <button
            to={`join-group/${groupId}`}
            className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-white font-semibold transition-all duration-300 hover:bg-gradient-to-l hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: "var(--primary-color)", // Using primary button color from CSS variable
            }}
          >
            Join Discussion
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
