import { motion } from 'framer-motion';

const pathVariants = {
  rest: { pathLength: 1, opacity: 1 },
  hover: (delay) => ({
    pathLength: [1, 0, 1],
    transition: {
      duration: 0.7,
      times: [0, 0.45, 1],
      ease: 'easeInOut',
      delay: delay * 0.08,
    },
  }),
};

const Svg = ({ viewBox = '0 0 24 24', color, children }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    width="48"
    height="48"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial="rest"
    whileHover="hover"
    style={{ display: 'block' }}
  >
    {children}
  </motion.svg>
);

const P = ({ d, i = 0 }) => (
  <motion.path d={d} variants={pathVariants} custom={i} />
);

const C = ({ cx, cy, r, i = 0 }) => (
  <motion.circle cx={cx} cy={cy} r={r} variants={pathVariants} custom={i} />
);

// ── Individual icons ────────────────────────────────────────────────

export const PythonIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M12 2C9.2 2 7 3.8 7 6v2h5v1H6.5C4.6 9 3 10.6 3 12.5v3C3 17.4 4.6 19 6.5 19H8v-2.5C8 14.6 9.6 13 11.5 13h3c1.7 0 3-1.3 3-3V6c0-2.2-2.2-4-5.5-4z" />
    <P i={1} d="M12 22c2.8 0 5-1.8 5-4v-2h-5v-1h5.5c1.9 0 3.5-1.6 3.5-3.5v-3C21 6.6 19.4 5 17.5 5H16v2.5C16 9.4 14.4 11 12.5 11h-3C7.8 11 6.5 12.3 6.5 14v4c0 2.2 2.2 4 5.5 4z" />
    <C i={2} cx="9.5" cy="6.5" r="0.8" />
    <C i={3} cx="14.5" cy="17.5" r="0.8" />
  </Svg>
);

export const JavaScriptIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M3 3h18v18H3z" />
    <P i={1} d="M8 17v-6" />
    <P i={2} d="M8 13c0 2 1.5 4 3 4s3-1 3-3v-7" />
  </Svg>
);

export const TypeScriptIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M3 3h18v18H3z" />
    <P i={1} d="M8 10h8" />
    <P i={2} d="M12 10v7" />
    <P i={3} d="M15 14c0 1.7-1.3 3-3 3s-3-1.3-3-3" />
  </Svg>
);

export const Html5Icon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M4 3l1.5 16L12 21l6.5-2L20 3H4z" />
    <P i={1} d="M8 8h8l-.5 5.5L12 15l-3.5-1.5L8 8z" />
    <P i={2} d="M8.5 12l3.5 1 3.5-1" />
  </Svg>
);

export const Css3Icon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M4 3l1.5 16L12 21l6.5-2L20 3H4z" />
    <P i={1} d="M8 8h8l-.8 6L12 15.5 8.8 14z" />
    <P i={2} d="M9.5 11h5l-.3 2.5-2.2.7-2.2-.7" />
  </Svg>
);

export const ReactIcon = ({ color }) => (
  <Svg color={color}>
    <C i={0} cx="12" cy="12" r="2" />
    <P i={1} d="M12 2C8.1 2 5 6.5 5 12s3.1 10 7 10 7-4.5 7-10S15.9 2 12 2z" />
    <P i={2} d="M2 12c0 2.2 4.5 4 10 4s10-1.8 10-4-4.5-4-10-4S2 9.8 2 12z" />
  </Svg>
);

export const NodeIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
    <P i={1} d="M12 22V12" />
    <P i={2} d="M3 7l9 5 9-5" />
  </Svg>
);

export const ExpressIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M3 8h18" />
    <P i={1} d="M3 12h12" />
    <P i={2} d="M3 16h18" />
    <P i={3} d="M18 12l3 4-3 4" />
  </Svg>
);

export const RestApiIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M4 6h16" />
    <P i={1} d="M4 12h10" />
    <P i={2} d="M4 18h7" />
    <P i={3} d="M16 14l4-2-4-2" />
    <P i={4} d="M20 12H14" />
  </Svg>
);

export const JwtIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
  </Svg>
);

export const PostgresIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M12 3C7.6 3 4 5.7 4 9v6c0 3.3 3.6 6 8 6s8-2.7 8-6V9c0-3.3-3.6-6-8-6z" />
    <P i={1} d="M4 9c0 3.3 3.6 6 8 6s8-2.7 8-6" />
    <P i={2} d="M16 9v8" />
  </Svg>
);

export const MySqlIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M4 6h16v12H4z" />
    <P i={1} d="M8 6v12" />
    <P i={2} d="M12 6v12" />
    <P i={3} d="M16 6v12" />
    <P i={4} d="M4 12h16" />
  </Svg>
);

export const MongoIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M12 2c-2 4-4 6-4 10a4 4 0 0 0 8 0c0-4-2-6-4-10z" />
    <P i={1} d="M12 22v-6" />
  </Svg>
);

export const GitIcon = ({ color }) => (
  <Svg color={color}>
    <C i={0} cx="6" cy="6" r="2" />
    <C i={1} cx="18" cy="6" r="2" />
    <C i={2} cx="12" cy="18" r="2" />
    <P i={3} d="M8 6h8" />
    <P i={4} d="M6 8v8c0 1.1.9 2 2 2h4" />
  </Svg>
);

export const GenAiIcon = ({ color }) => (
  <Svg color={color}>
    <P i={0} d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
    <P i={1} d="M19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" />
    <P i={2} d="M4 16l.8 2.2L7 19l-2.2.8L4 22l-.8-2.2L1 19l2.2-.8z" />
  </Svg>
);
