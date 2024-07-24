import React, { useEffect, useState } from "react";

interface SockOutlineProps {
  backgroundColor: string;
  stripeColor: string;
  selectedTemplate: number;
  leftLogoUrl?: string;
  rightLogoUrl?: string;
}

const SockOutline: React.FC<SockOutlineProps> = ({
  backgroundColor,
  stripeColor,
  selectedTemplate,
  leftLogoUrl,
  rightLogoUrl,
}) => {
  const [viewBox, setViewBox] = useState("0 50 900 800");
  const [svgSize, setSvgSize] = useState({ width: "400", height: "400" });

  useEffect(() => {
    const updateViewBoxAndSize = () => {
      if (window.innerWidth < 768) {
        //5 120 900 900
        setViewBox("0 120 850 850");
        setSvgSize({ width: "400", height: "490" });
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setViewBox("0 50 900 900");
        setSvgSize({ width: "720", height: "700" });
      } else {
        setViewBox("200 50 800 800");
        setSvgSize({ width: "900", height: "500" });
      }
    };

    updateViewBoxAndSize();
    window.addEventListener("resize", updateViewBoxAndSize);

    return () => {
      window.removeEventListener("resize", updateViewBoxAndSize);
    };
  }, []);

  const logoWidth = 100; // Example width for logos
  const logoHeight = 100; // Example height for logos
  const logoXOffset = 225; // Example offset for X position
  const logoYOffset = 170; // Example offset for Y position
  let patternRectangles: JSX.Element[] = [];

  // Define patterns based on selectedTemplate
  switch (selectedTemplate) {
    case 1:
      patternRectangles = [];
      break;
    case 2:
      patternRectangles = [
        <rect
          key="stripe1"
          x="250"
          y="120"
          width="145"
          height="45"
          fill={stripeColor}
        />,
        <rect
          key="stripe2"
          x="524"
          y="120"
          width="145"
          height="45"
          fill={stripeColor}
        />,
        <rect
          key="stripe3"
          x="524"
          y="280"
          width="145"
          height="45"
          fill={stripeColor}
        />,
        <rect
          key="stripe4"
          x="250"
          y="280"
          width="145"
          height="45"
          fill={stripeColor}
        />,
      ];
      break;

    case 3:
      patternRectangles = [
        <rect key="stripe1" x="250" y="160" width="145" height="120" fill={stripeColor} />,
        <rect key="stripe2" x="524" y="160" width="145" height="120" fill={stripeColor} />,
      ];
      break;

    case 4:
      patternRectangles = [
        <path
          key="path1"
          d="M 400 52 L 350 52 L 350 256 l 53 109"
          fill={stripeColor}
        />,
        <path
          key="path2"
          d="M 572 52 L 520 52 L 518 356 l 51 -94"
          fill={stripeColor}
        />,
      ];
      break;
    case 5:
      patternRectangles = [
        <path
          key="path1"
          d="M251,90 L250,170 L394,270 L394,190"
          fill={stripeColor}
        />,
        <path
          key="path2"
          d="M525,270 L525,190 L668,90 L668,170"
          fill={stripeColor}
        />,
      ];
      break;
    case 6:
      patternRectangles = [
        <path
          key="path3"
          d="M521,65 L523,105 L568.25,155 L567.25,115"
          fill={stripeColor}
        />,
        <path
          key="path4"
          d="M524 ,135 L525,175 L568.25,225 L567.25,185"
          fill={stripeColor}
        />,
        <path
          key="path5"
          d="M525,205 L525,245 L568.25,295 L567.25,255"
          fill={stripeColor}
        />,
        <path
          key="path6"
          d="M525,275 L525,315 L568.25,365 L567.25,325"
          fill={stripeColor}
        />,
        <path
          key="path7"
          d="M398.25,65 L396.25,105 L351,155 L352,115"
          fill={stripeColor}
        />,
        <path
          key="path8"
          d="M395.25,135 L394.25,175 L351,225 L352,185"
          fill={stripeColor}
        />,
        <path
          key="path9"
          d="M394.25,205 L394.25,245 L351,295 L352,255"
          fill={stripeColor}
        />,
        <path
          key="path10"
          d="M394.25,275 L394.25,315 L351,365 L352,325"
          fill={stripeColor}
        />,
      ];
      break;
    default:
      patternRectangles = [];
      break;
  }

  return (
    <div className="flex justify-center items-center overflow-hidden">
      <svg width={svgSize.width} height={svgSize.height} viewBox={viewBox}>
        <path
          d="M251.000000,144.500000 
          C250.726059,153.498016 251.518829,162.520126 250.486099,171.498398 
          C249.619705,179.030640 250.813080,186.514160 250.855545,194.000824 
          C251.032272,225.165543 251.539368,256.370941 250.198395,287.487000 
          C249.278549,308.831085 249.732086,330.186157 248.480240,351.498840 
          C247.360886,370.556213 242.938492,388.916595 233.259048,405.358154 
          C228.165634,414.009857 220.580154,421.177917 213.540359,428.538605 
          C202.923325,439.639709 191.500275,449.880249 179.919678,459.907227 
          C168.923065,469.428528 157.332260,478.260406 146.474838,487.971863 
          C137.933365,495.611847 129.137100,502.966217 120.509041,510.510345 
          C113.132111,516.960510 105.684669,523.341370 98.536926,530.039429 
          C89.213272,538.776489 80.222519,547.921265 73.069595,558.546875 
          C62.941536,573.592102 57.195259,590.241882 56.489780,608.499634 
          C56.219212,615.502014 55.315758,622.521606 55.607071,629.495544 
          C56.225502,644.300537 60.391926,658.149170 71.623528,668.364197 
          C81.291435,677.156982 93.491753,680.812683 106.494598,682.056458 
          C122.312225,683.569458 137.083298,679.066162 152.008316,675.030762 
          C179.886032,667.493225 202.922653,652.523315 221.530609,630.525879 
          C224.646729,626.842163 228.045959,623.374878 231.521149,620.021912 
          C245.556442,606.480530 257.865692,591.350647 270.840820,576.857483 
          C282.323212,564.031616 295.365112,553.349060 308.850830,542.809143 
          C326.714661,528.847351 347.439575,521.187256 368.049042,513.125366 
          C375.577911,510.180328 384.072021,509.578583 391.417145,506.313599 
          C407.599731,499.120300 418.926147,486.613251 423.154785,469.415131 
          C425.164246,461.242554 423.917419,452.141571 423.398499,443.506104 
          C422.686279,431.653717 417.285736,421.021484 413.444824,410.019257 
          C409.444244,398.559753 406.719269,386.797668 403.940094,375.014130 
          C399.200470,354.918274 396.698456,334.493561 395.101746,313.992065 
          C392.366638,278.873383 394.702209,243.662689 393.982422,208.500366 
          C393.603394,189.983688 394.624420,171.496933 395.087769,153.002197 
          C395.601410,132.500092 396.812408,112.017555 397.038208,91.500420 
          C397.153778,80.998024 397.467712,70.488167 398.091400,60.005436 
          C398.366577,55.379868 395.596222,52.873863 390.999573,52.892628 
          C347.000305,53.072220 303.000000,52.988834 259.000000,53.011711 
          C252.182098,53.015255 251.005783,54.260342 251.000977,61.000000 
          C250.996460,67.333336 250.783051,73.675598 251.043365,79.998215 
          C251.662140,95.027901 249.131317,110.000877 250.145233,124.990173 
          C250.574173,131.331543 249.495911,137.728287 251.000000,144.000000"
          fill={backgroundColor}
          stroke="black"
          strokeWidth="1"
        />
        <path
          d="M668.000000,144.500000 
          C668.227539,153.332184 667.578918,162.182632 668.505981,170.999374 
          C669.314819,178.690918 668.208069,186.347656 668.156555,194.001053 
          C667.947021,225.165192 667.445557,256.371613 668.786682,287.487640 
          C669.821350,311.492676 668.660706,335.599854 671.222229,359.476166 
          C673.036804,376.389679 677.173523,393.216675 687.173828,407.377258 
          C696.224854,420.193695 707.553955,431.244171 719.031860,441.965912 
          C740.972107,462.460754 764.805176,480.777039 787.118469,500.868408 
          C799.223877,511.768280 812.046753,521.918274 823.932922,533.071533 
          C839.495911,547.674805 852.285522,564.417236 858.866699,585.042542 
          C861.058105,591.910400 862.181946,599.195251 862.499939,606.500000 
          C862.833679,614.166687 863.691040,621.854126 863.388123,629.495544 
          C862.801331,644.301086 858.556763,658.087402 847.392456,668.383423 
          C837.728760,677.295532 825.444763,680.797668 812.500488,682.005493 
          C797.067871,683.445374 782.664001,678.932678 767.953430,675.182739 
          C740.835876,668.269958 718.737305,653.783203 699.987549,633.511536 
          C695.906372,629.099121 691.697876,624.802795 687.494019,620.505798 
          C675.759705,608.511536 665.062988,595.591858 654.011719,582.989746 
          C639.493164,566.433594 623.100281,552.164551 605.187988,539.239441 
          C590.725342,528.803467 574.379456,523.102905 558.534729,515.923340 
          C549.518127,511.837769 539.605652,511.014343 530.519775,507.449646 
          C513.016846,500.582733 500.949341,488.256287 496.181244,469.952789 
          C493.956909,461.414398 495.203705,452.298615 495.647980,443.507477 
          C496.301453,430.576691 502.661987,419.109772 506.561279,407.019775 
          C511.742096,390.956299 515.683960,374.620667 518.490540,357.998413 
          C521.428772,340.595825 523.400513,323.060242 524.873779,305.489410 
          C525.441284,298.721008 525.279297,291.848694 525.167480,284.997253 
          C524.748840,259.337433 524.801697,233.664627 525.066528,208.000687 
          C525.257629,189.481567 524.225037,171.002472 523.945496,152.500824 
          C523.711243,136.996811 523.004150,121.499863 522.498779,106.000038 
          C522.004272,90.833199 521.626038,75.660904 520.933228,60.503052 
          C520.682556,55.017918 523.031921,52.891949 528.500305,52.911747 
          C572.166443,53.069843 615.833313,52.994480 659.500000,53.005306 
          C666.970825,53.007160 668.000000,54.068558 668.000000,61.500000 
          C668.000000,74.000000 667.544189,86.522987 668.173096,98.991272 
          C668.543152,106.327660 669.579834,113.718933 668.827881,120.982185 
          C668.031555,128.674744 670.447021,136.425232 668.000000,144.000000"
          fill={backgroundColor}
          stroke="black"
          strokeWidth="1"
        />
        {patternRectangles}
        {/* Left Logo */}
        {leftLogoUrl && (
          <image
            x={logoXOffset + 369}
            y={logoYOffset}
            width={logoWidth}
            height={logoHeight}
            xlinkHref={leftLogoUrl}
          />
        )}
        {/* Right Logo */}
        {rightLogoUrl && (
          <image
            x={logoXOffset}
            y={logoYOffset}
            width={logoWidth}
            height={logoHeight}
            xlinkHref={rightLogoUrl}
          />
        )}
      </svg>
    </div>
  );
};

export default SockOutline;
