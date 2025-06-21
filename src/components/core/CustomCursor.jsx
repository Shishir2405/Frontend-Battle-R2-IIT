import React, { useRef, useEffect, useCallback, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ClickSpark Component
const ClickSpark = ({
  sparkColor = "#fff",
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = "ease-out",
  extraScale = 1.0,
  children,
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);
  const startTimeRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    let resizeTimeout;
    const resizeCanvas = () => {
      const { width, height } = parent.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    const ro = new ResizeObserver(handleResize);
    ro.observe(parent);
    resizeCanvas();

    return () => {
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  }, []);

  const easeFunc = useCallback(
    (t) => {
      switch (easing) {
        case "linear":
          return t;
        case "ease-in":
          return t * t;
        case "ease-in-out":
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;

    const draw = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) {
          return false;
        }

        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);
        const opacity = 1 - eased;

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        // Create gradient for spark
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(
          0,
          sparkColor +
            Math.floor(opacity * 255)
              .toString(16)
              .padStart(2, "0")
        );
        gradient.addColorStop(1, sparkColor + "00");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3 * (1 - eased);
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [
    sparkColor,
    sparkSize,
    sparkRadius,
    sparkCount,
    duration,
    easeFunc,
    extraScale,
  ]);

  const handleClick = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = performance.now();

    const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
      x,
      y,
      angle: (2 * Math.PI * i) / sparkCount + (Math.random() - 0.5) * 0.3,
      startTime: now,
    }));

    sparksRef.current.push(...newSparks);
  };

  return (
    <div className="relative w-full h-full" onClick={handleClick}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block absolute top-0 left-0 select-none pointer-events-none z-50"
      />
      {children}
    </div>
  );
};

// Custom Cursor Component
const CustomCursor = ({ isDarkBackground = false }) => {
  const cursorRef = useRef(null);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth spring animation for cursor
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Handle hover states for interactive elements
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.matches("button, a, [data-cursor-hover], .cursor-hover")) {
        setIsHovering(true);
        setCursorText(target.getAttribute("data-cursor-text") || "CLICK");
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.matches("button, a, [data-cursor-hover], .cursor-hover")) {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Add event listeners for hover detection
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const cursorStyle = isDarkBackground
    ? "bg-white/80 border-white/40 text-black"
    : "bg-black/80 border-black/40 text-white";

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {/* Outer Ring */}
        <motion.div
          className={`absolute rounded-full border-2 backdrop-blur-sm ${cursorStyle}`}
          animate={{
            width: isHovering ? 60 : isClicking ? 20 : 32,
            height: isHovering ? 60 : isClicking ? 20 : 32,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />

        {/* Inner Dot */}
        <motion.div
          className={`absolute rounded-full ${
            isDarkBackground ? "bg-white" : "bg-black"
          }`}
          animate={{
            width: isClicking ? 8 : 4,
            height: isClicking ? 8 : 4,
            scale: isHovering ? 0 : 1,
          }}
          style={{
            translateX: "-50%",
            translateY: "-50%",
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />

        {/* Cursor Text */}
        {cursorText && (
          <motion.div
            className={`absolute whitespace-nowrap text-xs font-bold tracking-wider ${
              isDarkBackground ? "text-white" : "text-black"
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              translateX: "-50%",
              translateY: "-150%",
            }}
          >
            {cursorText}
          </motion.div>
        )}
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              isDarkBackground ? "bg-white/20" : "bg-black/20"
            }`}
            animate={{
              width: 8 - i,
              height: 8 - i,
              opacity: 0.8 - i * 0.1,
            }}
            transition={{
              duration: 0.3,
              delay: i * 0.02,
              ease: "easeOut",
            }}
            style={{
              translateX: "-50%",
              translateY: "-50%",
            }}
          />
        ))}
      </motion.div>
    </>
  );
};

// CursorProvider - Detects background automatically
const CursorProvider = ({ children }) => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const detectBackground = () => {
      const sections = document.querySelectorAll(
        "[data-bg], section, .hero, .black-section"
      );

      sections.forEach((section) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              const bgType =
                section.getAttribute("data-bg") ||
                (section.className.includes("bg-black") ? "dark" : "light");
              setIsDarkBackground(bgType === "dark");
            }
          },
          { threshold: 0.5 }
        );

        observer.observe(section);
      });
    };

    // Initial detection
    detectBackground();

    // Re-detect on scroll
    window.addEventListener("scroll", detectBackground);

    return () => {
      window.removeEventListener("scroll", detectBackground);
    };
  }, []);

  return (
    <>
      <CustomCursor isDarkBackground={isDarkBackground} />
      <ClickSpark
        sparkColor={isDarkBackground ? "#ffffff" : "#000000"}
        sparkSize={12}
        sparkRadius={25}
        sparkCount={12}
        duration={600}
        easing="ease-out"
        extraScale={1.2}
      >
        {children}
      </ClickSpark>
    </>
  );
};

export { CustomCursor, ClickSpark, CursorProvider };
