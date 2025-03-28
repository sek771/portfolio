import MenuNav from "./menu";

const HeaderMobile = () => {
  return (
    <header className="lg:hidden">
      <nav className=" top-0 z-50 bg-[#1C1F26] w-full grid grid-cols-3">
        <div>
          <MenuNav />
        </div>
        <div className="flex items-center justify-center col-span-2 py-4">
          <a href="http://localhost:3000">
            <svg
              width="120"
              height="60"
              viewBox="0 0 600 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Import d'une police Google en ligne */}
              <style>
                {`
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
          `}
              </style>

              {/* Ailes Gauche */}
              <path
                d="M150 100 C80 70, 50 40, 60 30 C90 30, 130 70, 150 90"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="6"
              />
              <path
                d="M140 120 C70 90, 30 60, 40 50 C70 50, 110 90, 130 110"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="4"
              />
              <path
                d="M130 140 C60 110, 10 80, 20 70 C50 70, 90 110, 110 130"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="3"
              />

              {/* Ailes Droite */}
              <path
                d="M450 100 C520 70, 550 40, 540 30 C510 30, 470 70, 450 90"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="6"
              />
              <path
                d="M460 120 C530 90, 570 60, 560 50 C530 50, 490 90, 470 110"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="4"
              />
              <path
                d="M470 140 C540 110, 590 80, 580 70 C550 70, 510 110, 490 130"
                fill="none"
                stroke="#b28c2f"
                strokeWidth="3"
              />

              {/* Texte SACKO Centré */}
              <text
                x="300"
                y="130"
                fontFamily="'Great Vibes', cursive"
                fontSize="70"
                fontWeight="bold"
                fill="#b28c2f"
                textAnchor="middle"
              >
                SACKO
              </text>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};
export default HeaderMobile;
