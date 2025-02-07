const Logo = () => {
  return (
    <svg
      width="300"
      height="150"
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

      {/* Texte SACKO avec une police calligraphique */}
      <text
        x="150"
        y="130"
        fontFamily="'Great Vibes', cursive"
        fontSize="100"
        fontWeight="bold"
        fill="#F2A900"
      >
        SACKO
      </text>

      {/* Aile gauche */}
      <path
        d="M100 80 C50 60, 30 20, 40 10 C60 10, 90 30, 110 50"
        fill="none"
        stroke="#F2A900"
        strokeWidth="8"
      />
      <path
        d="M90 100 C30 90, 10 50, 20 40 C40 40, 70 70, 90 90"
        fill="none"
        stroke="#F2A900"
        strokeWidth="6"
      />
      <path
        d="M80 120 C20 110, 5 80, 15 70 C30 70, 60 100, 80 110"
        fill="none"
        stroke="#F2A900"
        strokeWidth="4"
      />

      {/* Aile droite */}
      <path
        d="M500 80 C550 60, 570 20, 560 10 C540 10, 510 30, 490 50"
        fill="none"
        stroke="#F2A900"
        strokeWidth="8"
      />
      <path
        d="M510 100 C570 90, 590 50, 580 40 C560 40, 530 70, 510 90"
        fill="none"
        stroke="#F2A900"
        strokeWidth="6"
      />
      <path
        d="M520 120 C580 110, 595 80, 585 70 C570 70, 540 100, 520 110"
        fill="none"
        stroke="#F2A900"
        strokeWidth="4"
      />
    </svg>
  );
};

export default Logo;
