import React from "react";

const Marquee = () => {
  const institutions = [
    {
      name: "Apple Inc.",
      logo: "https://imgs.search.brave.com/1bhL6ufZamxoV5Ikhs9IXvQoGD4DPumk9Nh2polNLQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FwcGxlX2xvZ29f/Z3JleS02MjR4NDAw/LnBuZw",
      alt: "Apple Logo",
    },
    {
      name: "Harvard University",
      logo: "https://imgs.search.brave.com/gobRnLZ25CnY59Cm1yGwvK3fYRlljWOIN9ps8t_dX6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTUvSGFy/dmFyZC1Mb2dvLVBO/Ry1QaWMucG5n",
      alt: "Harvard Logo",
    },
    {
      name: "University of Cambridge",
      logo: "https://imgs.search.brave.com/00XhYKkCUjas2e1FpkV9ncp7HsoxMRStz33sCGjIO9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvVW5pdmVy/c2l0eV9vZl9DYW1i/cmlkZ2VfY3Jlc3Rf/bG9nby01NTZ4NzAw/LnBuZw",
      alt: "Cambridge Logo",
    },
    {
      name: "McKinsey & Company",
      logo: "https://imgs.search.brave.com/qxwGI3WPnCzFsEUxf_I4GEPxsWdWNyDl57JTn3FgGvM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGlibG9nby5jb20v/aW1nLWxvZ28vbWM0/MDQybWMwMi1tY2tp/bnNleS1hbmQtY29t/cGFueS1sb2dvLW1j/a2luc2V5LWFtcC1j/b21wYW55LXRoZS1k/aXZlcnNpdHktY291/bmNpbC5wbmc",
      alt: "McKinsey Logo",
    },
    {
      name: "IIT Bombay",
      logo: "https://imgs.search.brave.com/5zXBDaKBRYssyLz8dVuUNqHwXrXujUKhP-eHsU_spfM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5na2V5LmNvbS9w/bmcvZGV0YWlsLzUw/LTUwNjAzOV9paXQt/Ym9tYmF5LWxvZ28t/cG5nLnBuZw",
      alt: "IIT Bombay Logo",
    },
  ];

  return (
    <div className="w-[90vw] mx-auto h-[40vh] sm:h-[50vh] md:h-[55vh] shadow-lg overflow-hidden rounded-md mb-4 text-[#dee5e5]">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-10">
        Trusted By Top Institutions And Companies
      </h1>

      <div className="flex animate-marquee items-center whitespace-nowrap gap-10 sm:gap-10">
        {institutions.map((institution, index) => (
          <div
            key={index}
            className="mx-2 sm:mx-4 md:mx-5 flex items-center text-base sm:text-lg font-semibold"
          >
            <img
              src={institution.logo}
              alt={institution.alt}
              className="h-6 w-10 sm:h-8 sm:w-12 md:h-10 md:w-14 mr-2"
            />
            {institution.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
