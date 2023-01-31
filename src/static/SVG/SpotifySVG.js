import * as React from 'react'

const SpotifySVG = (props) => (
  <svg
    viewBox="0,0,256,256"
    width="80px"
    height="80px"
    fillRule="nonzero"
    {...props}
  >
    <defs>
      <linearGradient
        x1="24.001"
        y1="-4.765"
        x2="24.001"
        y2="56.31"
        gradientUnits="userSpaceOnUse"
        id="color-1"
      >
        <stop offset="0" stopColor="#1db954" />
        <stop offset="0.489" stopColor="#4aaf50" />
        <stop offset="0.665" stopColor="#43ad50" />
        <stop offset="0.79" stopColor="#38aa50" />
        <stop offset="0.892" stopColor="#27a550" />
        <stop offset="0.978" stopColor="#11a050" />
        <stop offset="1" stopColor="#0a9e50" />
      </linearGradient>
    </defs>
    <g
      fill="none"
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      strokeDasharray=""
      strokeDashoffset="0"
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
    >
      <g transform="scale(5.33333,5.33333)">
        <path
          d="M24.001,4c-11.077,0 -20,8.923 -20,20c0,11.077 8.923,20 20,20c11.076,0 20,-8.923 20,-20c0,-11.077 -8.924,-20 -20,-20z"
          fill="url(#color-1)"
        />
        <path
          d="M21.224,15.938c5.554,0 11.4,1.17 15.785,3.654c0.584,0.293 1.022,0.877 1.022,1.754c-0.145,1.023 -0.877,1.755 -1.899,1.755c-0.438,0 -0.585,-0.146 -1.023,-0.291c-3.508,-2.047 -8.769,-3.217 -13.885,-3.217c-2.631,0 -5.262,0.293 -7.6,0.877c-0.293,0 -0.585,0.146 -1.023,0.146c-0.075,0.011 -0.149,0.016 -0.221,0.016c-0.905,0 -1.533,-0.821 -1.533,-1.77c0,-1.023 0.585,-1.607 1.315,-1.754c2.777,-0.877 5.7,-1.17 9.062,-1.17M20.785,22.369c4.97,0 9.793,1.17 13.593,3.507c0.584,0.291 0.877,0.877 0.877,1.461c0,0.878 -0.585,1.608 -1.462,1.608c-0.438,0 -0.73,-0.144 -1.023,-0.291c-3.068,-1.9 -7.308,-3.071 -12.13,-3.071c-2.339,0 -4.531,0.293 -6.139,0.733c-0.439,0.144 -0.585,0.144 -0.877,0.144c-0.877,0 -1.462,-0.73 -1.462,-1.461c0,-0.877 0.439,-1.316 1.169,-1.607c2.192,-0.584 4.385,-1.023 7.454,-1.023M21.223,28.654c4.093,0 7.893,1.021 11.108,2.924c0.438,0.291 0.731,0.584 0.731,1.314c-0.146,0.586 -0.731,1.023 -1.315,1.023c-0.292,0 -0.585,-0.145 -0.877,-0.292c-2.777,-1.607 -6.139,-2.484 -9.792,-2.484c-2.047,0 -4.093,0.291 -5.993,0.73c-0.292,0 -0.731,0.146 -0.877,0.146c-0.731,0 -1.169,-0.586 -1.169,-1.17c0,-0.73 0.438,-1.17 1.023,-1.314c2.338,-0.586 4.677,-0.877 7.161,-0.877M21.224,14.938c-3.789,0 -6.666,0.371 -9.317,1.202c-1.254,0.279 -2.06,1.341 -2.06,2.722c0,1.553 1.112,2.77 2.533,2.77c0.095,0 0.192,-0.005 0.291,-0.017c0.319,-0.007 0.574,-0.065 0.764,-0.107c0.068,-0.015 0.13,-0.035 0.193,-0.038h0.123l0.116,-0.03c2.219,-0.554 4.763,-0.847 7.358,-0.847c5.073,0 10.075,1.152 13.381,3.081l0.09,0.053l0.099,0.033c0.109,0.036 0.195,0.073 0.273,0.105c0.251,0.105 0.563,0.236 1.065,0.236c1.483,0 2.671,-1.075 2.889,-2.615l0.01,-0.07v-0.071c0,-1.171 -0.564,-2.13 -1.549,-2.635c-4.245,-2.397 -10.169,-3.772 -16.259,-3.772zM20.785,21.369c-3.291,0 -5.651,0.508 -7.711,1.057l-0.058,0.015l-0.055,0.022c-1.194,0.476 -1.799,1.329 -1.799,2.536c0,1.357 1.104,2.461 2.462,2.461c0.371,0 0.626,-0.009 1.189,-0.194c1.572,-0.429 3.714,-0.683 5.827,-0.683c4.441,0 8.562,1.037 11.603,2.921l0.038,0.024l0.04,0.02c0.334,0.168 0.792,0.397 1.471,0.397c1.404,0 2.462,-1.121 2.462,-2.608c0,-0.996 -0.53,-1.886 -1.387,-2.334c-3.827,-2.344 -8.827,-3.634 -14.082,-3.634zM21.223,27.654c-2.547,0 -4.969,0.297 -7.404,0.907c-1.096,0.27 -1.78,1.145 -1.78,2.284c0,1.217 0.953,2.17 2.169,2.17c0.172,0 0.334,-0.037 0.522,-0.079c0.101,-0.023 0.288,-0.065 0.357,-0.067l0.101,-0.003l0.122,-0.023c2.023,-0.467 3.963,-0.704 5.768,-0.704c3.422,0 6.635,0.812 9.291,2.35l0.025,0.015l0.026,0.013c0.334,0.168 0.792,0.399 1.327,0.399c1.05,0 2.032,-0.766 2.285,-1.781l0.03,-0.119v-0.123c0,-1.202 -0.595,-1.76 -1.178,-2.147l-0.022,-0.014l-0.022,-0.013c-3.385,-2.006 -7.403,-3.065 -11.617,-3.065z"
          fill="#000000"
          opacity="0.05"
        />
        <path
          d="M21.224,15.938c5.554,0 11.4,1.17 15.785,3.654c0.584,0.293 1.022,0.877 1.022,1.754c-0.145,1.023 -0.877,1.755 -1.899,1.755c-0.438,0 -0.585,-0.146 -1.023,-0.291c-3.508,-2.047 -8.769,-3.217 -13.885,-3.217c-2.631,0 -5.262,0.293 -7.6,0.877c-0.293,0 -0.585,0.146 -1.023,0.146c-0.075,0.011 -0.149,0.016 -0.221,0.016c-0.905,0 -1.533,-0.821 -1.533,-1.77c0,-1.023 0.585,-1.607 1.315,-1.754c2.777,-0.877 5.7,-1.17 9.062,-1.17M20.785,22.369c4.97,0 9.793,1.17 13.593,3.507c0.584,0.291 0.877,0.877 0.877,1.461c0,0.878 -0.585,1.608 -1.462,1.608c-0.438,0 -0.73,-0.144 -1.023,-0.291c-3.068,-1.9 -7.308,-3.071 -12.13,-3.071c-2.339,0 -4.531,0.293 -6.139,0.733c-0.439,0.144 -0.585,0.144 -0.877,0.144c-0.877,0 -1.462,-0.73 -1.462,-1.461c0,-0.877 0.439,-1.316 1.169,-1.607c2.192,-0.584 4.385,-1.023 7.454,-1.023M21.223,28.654c4.093,0 7.893,1.021 11.108,2.924c0.438,0.291 0.731,0.584 0.731,1.314c-0.146,0.586 -0.731,1.023 -1.315,1.023c-0.292,0 -0.585,-0.145 -0.877,-0.292c-2.777,-1.607 -6.139,-2.484 -9.792,-2.484c-2.047,0 -4.093,0.291 -5.993,0.73c-0.292,0 -0.731,0.146 -0.877,0.146c-0.731,0 -1.169,-0.586 -1.169,-1.17c0,-0.73 0.438,-1.17 1.023,-1.314c2.338,-0.586 4.677,-0.877 7.161,-0.877M21.224,15.438c-3.747,0 -6.582,0.366 -9.188,1.186c-1.042,0.222 -1.689,1.078 -1.689,2.238c0,1.273 0.893,2.27 2.033,2.27c0.084,0 0.169,-0.005 0.257,-0.016c0.28,-0.004 0.506,-0.055 0.689,-0.096c0.119,-0.027 0.222,-0.05 0.299,-0.05h0.061l0.06,-0.015c2.258,-0.564 4.844,-0.862 7.479,-0.862c5.158,0 10.254,1.177 13.633,3.149l0.045,0.026l0.05,0.016c0.123,0.041 0.221,0.082 0.309,0.119c0.231,0.097 0.47,0.197 0.871,0.197c1.247,0 2.209,-0.878 2.394,-2.185l0.005,-0.035v-0.035c0,-0.985 -0.473,-1.787 -1.298,-2.201c-4.151,-2.35 -9.994,-3.706 -16.01,-3.706zM20.785,21.869c-3.054,0 -5.24,0.416 -7.583,1.04l-0.029,0.008l-0.028,0.011c-0.637,0.254 -1.484,0.745 -1.484,2.071c0,0.943 0.75,1.961 1.962,1.961c0.34,0 0.541,-0.008 1.033,-0.169c1.637,-0.447 3.827,-0.708 5.983,-0.708c4.533,0 8.747,1.064 11.867,2.996c0.345,0.175 0.725,0.366 1.286,0.366c1.119,0 1.962,-0.906 1.962,-2.108c0,-0.823 -0.442,-1.554 -1.154,-1.909c-3.715,-2.287 -8.635,-3.559 -13.815,-3.559zM21.223,28.154c-2.506,0 -4.888,0.292 -7.283,0.892c-0.864,0.213 -1.401,0.902 -1.401,1.799c0,0.821 0.624,1.67 1.669,1.67c0.116,0 0.246,-0.029 0.411,-0.067c0.148,-0.033 0.351,-0.079 0.466,-0.079h0.057l0.056,-0.013c2.06,-0.476 4.038,-0.717 5.88,-0.717c3.51,0 6.809,0.836 9.542,2.417c0.331,0.168 0.712,0.359 1.127,0.359c0.827,0 1.601,-0.603 1.8,-1.402l0.015,-0.06v-0.061c0,-1.012 -0.493,-1.424 -0.954,-1.73c-3.331,-1.973 -7.26,-3.008 -11.385,-3.008z"
          fill="#000000"
          opacity="0.07"
        />
        <path
          d="M31.747,33.915c-0.292,0 -0.585,-0.145 -0.877,-0.292c-2.777,-1.607 -6.139,-2.484 -9.792,-2.484c-2.047,0 -4.093,0.291 -5.993,0.73c-0.292,0 -0.731,0.146 -0.877,0.146c-0.731,0 -1.169,-0.586 -1.169,-1.17c0,-0.73 0.438,-1.17 1.023,-1.314c2.338,-0.586 4.677,-0.877 7.161,-0.877c4.093,0 7.893,1.021 11.108,2.924c0.438,0.291 0.731,0.584 0.731,1.314c-0.146,0.586 -0.731,1.023 -1.315,1.023zM33.793,28.945c-0.438,0 -0.73,-0.144 -1.023,-0.291c-3.068,-1.9 -7.308,-3.071 -12.13,-3.071c-2.339,0 -4.531,0.293 -6.139,0.733c-0.439,0.144 -0.585,0.144 -0.877,0.144c-0.877,0 -1.462,-0.73 -1.462,-1.461c0,-0.877 0.439,-1.316 1.169,-1.607c2.192,-0.584 4.385,-1.023 7.454,-1.023c4.97,0 9.793,1.17 13.593,3.507c0.584,0.291 0.877,0.877 0.877,1.461c0,0.878 -0.585,1.608 -1.462,1.608zM36.132,23.101c-0.438,0 -0.585,-0.146 -1.023,-0.291c-3.508,-2.047 -8.769,-3.217 -13.885,-3.217c-2.631,0 -5.262,0.293 -7.6,0.877c-0.293,0 -0.585,0.146 -1.023,0.146c-1.023,0.146 -1.754,-0.73 -1.754,-1.754c0,-1.023 0.585,-1.607 1.315,-1.754c2.777,-0.877 5.7,-1.17 9.062,-1.17c5.554,0 11.4,1.17 15.785,3.654c0.584,0.293 1.022,0.877 1.022,1.754c-0.145,1.023 -0.877,1.755 -1.899,1.755z"
          fill="#ffffff"
        />
      </g>
    </g>
  </svg>
)

export default SpotifySVG
