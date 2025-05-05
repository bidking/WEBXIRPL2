import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Senin = React.lazy(() => import("../components/Mapel/Senin"));
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"));
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"));
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"));
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"));

const Schedule = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[new Date().getDay()];
  const currentWeek = Math.floor((new Date().getDate() - 1) / 7) + 1;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let piketGroup = [];

  // Menentukan kelompok piket berdasarkan minggu saat ini
  if (currentWeek === 2 || currentWeek === 4) {
    piketGroup = [
      ["ailienda", "aisyah", "akhmad", "carson", "gita", "ariel", "b.putra"],
      ["cindi", "deffa", "aliyah", "erwin", "esta", "gusti", "gyan"],
      ["jonson", "kaffah", "titis", "mikhael", "fawazs", "farid", "pasha"],
      ["alfan", "azman", "b.akbar", "iqfal", "mahdi", "bizzer", "ratu"],
      ["dias", "radit", "rayara", "bonge", "reffi", "wafa", "wfiq","zhafran"],
    ];
    /* sementara tuker week - masih perbaikan */
  } else if (currentWeek === 1 || currentWeek === 3) {
    piketGroup = [
      ["ailienda", "aisyah", "akhmad", "carson", "gita", "ariel", "b.putra"],
      ["cindi", "deffa", "aliyah", "erwin", "esta", "gusti", "gyan"],
      ["jonson", "kaffah", "titis", "mikhael", "fawazs", "farid", "pasha"],
      ["alfan", "azman", "b.akbar", "iqfal", "mahdi", "bizzer", "ratu"],
      ["dias", "radit", "rayara", "bonge", "reffi", "wafa", "wfiq","zhafran"],
    ];
  }

  const dayComponents = [
    null, // Kosongkan indeks 0
    Senin,
    Selasa,
    Rabu,
    Kamis,
    Jumat,
  ];

  // Menampilkan komponen berdasarkan hari saat ini
  const TodayComponent = dayComponents[new Date().getDay()];

  // Menampilkan nama-nama piket sesuai dengan hari dan minggu saat ini
  const currentPiketNames = piketGroup[new Date().getDay() - 1];

  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
        {/* Class Schedule - Left Column */}
        <div className="text-white flex-1 glass-card p-6" data-aos="fade-right" data-aos-duration="600">
          <h2 className="text-2xl font-medium mb-5 text-center text-gradient-primary">
            {currentDay} Classes
          </h2>
          <div className="bg-[rgba(26,26,46,0.4)] rounded-lg p-4 max-h-[400px] overflow-y-auto">
            {TodayComponent ? (
              <React.Suspense fallback={<div className="flex justify-center p-4"><div className="loader"></div></div>}>
                <TodayComponent />
              </React.Suspense>
            ) : (
              <p className="opacity-50 text-center py-8">No classes today</p>
            )}
          </div>
        </div>

        {/* Picket Schedule - Right Column */}
        <div className="text-white flex-1 glass-card p-6" data-aos="fade-left" data-aos-duration="600">
          <h2 className="text-2xl font-medium mb-5 text-center text-gradient-accent">
            Picket Schedule
          </h2>
          <div className="bg-[rgba(26,26,46,0.4)] rounded-lg p-4 max-h-[400px] overflow-y-auto">
            {currentPiketNames && currentPiketNames.length > 0 ? (
              <div className="border border-[rgba(255,42,109,0.2)] rounded-lg overflow-hidden">
                {currentPiketNames.map((piketName, index) => (
                  <div
                    key={index}
                    className={`border-t border-[rgba(255,42,109,0.2)] flex justify-between items-center py-3 px-4 ${
                      index === 0 ? "border-t-0" : ""
                    } hover:bg-[rgba(255,42,109,0.1)] transition-colors`}
                    data-aos="fade-up"
                    data-aos-duration={300 + index * 50}
                    data-aos-delay={100 * index}
                  >
                    <div className="text-base font-medium">{index + 1}.</div>
                    <div className="text-base font-medium flex-1 text-center">{piketName}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="opacity-50 text-center py-8">Maintenance in progress for schedule system</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Custom CSS for Loader */}
      <style jsx>{`
        .loader {
          width: 24px;
          height: 24px;
          border: 3px solid var(--primary-color);
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Schedule;