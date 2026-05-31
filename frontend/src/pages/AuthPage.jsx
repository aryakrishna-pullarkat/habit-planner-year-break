import { useState, useMemo } from "react";
import Layout from "../components/Layout";
import Login from "./Login";
import Register from "./Register";

function AuthPage() {

  const [isLogin, setIsLogin] = useState(true);
  const [focused, setFocused] = useState(false);

  /* PARTICLES */
  const particles = useMemo(() => {

    return [...Array(100)].map((_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: `${Math.random() * 15 + 2}px`,
      duration:
        `${Math.random() * 20 + 10}s`,
      delay:
        `${Math.random() * 10}s`,
    }));

  }, []);

  return (

    <Layout>
      <div style={styles.container}>
      {/* PARTICLES */}
      <div className="particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              "--x": particle.x,
              "--y": particle.y,
              "--size": particle.size,
              "--duration": particle.duration,
              "--delay": particle.delay,
            }}
          ></span>
        ))}

      </div>
      {/* RINGS */}
      <div
        className={
          focused
            ? "square active-rings"
            : "square"
        }
      >
        <i></i>
        <i></i>
        <i></i>
      </div>

      {/* FORM SWITCH */}
      <div
        className={
          isLogin
            ? "show-login"
            : "show-register"
        }
      >
        {
          isLogin ? (
            <Login
              switchToRegister={() =>
                setIsLogin(false)
              }
              setFocused={setFocused}
            />
          ) : (
            <Register
              switchToLogin={() =>
                setIsLogin(true)
              }
              setFocused={setFocused}
            />
          )
        }
      </div>
      {/* CSS */}
      <style>{`
        @keyframes gradientBG {
          0%{
            background-position:0% 0%;
          }
          25%{
            background-position:50% 50%;
          }
          50%{
            background-position:90% 90%;
          }
          75%{
            background-position:50% 50%;
          }
          100%{
            background-position:0% 0%;
          }
        }
        /* PARTICLES */
        .particles{
          position:absolute;
          inset:0;
          overflow:hidden;
          z-index:0;
          pointer-events:none;
        }
        .particle{
          position:absolute;
          left:var(--x);
          top:var(--y);
          width:var(--size);
          height:var(--size);
          border-radius:50%;
          background:
            radial-gradient(
              circle,
              rgba(255,255,255,0.8),
              rgba(255,255,255,0.05)
            );
          box-shadow:
            0 0 10px rgba(255,255,255,0.25);
          animation:
            floatParticle var(--duration)
            ease-in-out infinite alternate;
          animation-delay:var(--delay);
        }
        @keyframes floatParticle{
          0%{
            transform:
              translate3d(0px, 0px, 0px)
              scale(1);
          }
          20%{
            transform:
              translate3d(30px, -50px, 0px)
              scale(1.1);
          }
          40%{
            transform:
              translate3d(-20px, -90px, 0px)
              scale(0.9);
          }
          60%{
            transform:
              translate3d(-50px, -30px, 0px)
              scale(1.05);
          }
          80%{
            transform:
              translate3d(40px, 40px, 0px)
              scale(0.95);
          }
          100%{
            transform:
              translate3d(0px, 0px, 0px)
              scale(1);
          }
        }
        /* RINGS */
        .square{
          position:absolute;
          width:750px;
          height:750px;
          display:flex;
          justify-content:center;
          align-items:center;
          z-index:1;
        }
        .square i{
          position:absolute;
          inset:0;
          border:
            2px solid rgba(255,255,255,0.25);
          transition:0.5s;
        }

        .square i:nth-child(1){
          border-radius:
          38% 62% 63% 37% /
          41% 44% 56% 59%;
          animation:
            animate 6s linear infinite;
          border-color:#ffffff;
        }

        .square i:nth-child(2){
          border-radius:
          41% 44% 56% 59% /
          38% 62% 63% 37%;
          animation:
            animate 4s linear infinite;
          border-color:#d6c7ff;
        }

        .square i:nth-child(3){
          border-radius:
          41% 44% 56% 59% /
          38% 62% 63% 37%;
          animation:
            animateReverse 10s linear infinite;
          border-color:#a78bfa;
        }

        .active-rings i:nth-child(1){
          box-shadow:
            0 0 20px rgba(255,255,255,0.9),
            0 0 50px rgba(255,255,255,0.7),
            0 0 120px rgba(255,255,255,0.4);
        }
        .active-rings i:nth-child(2){
          box-shadow:
            0 0 20px #d6c7ff,
            0 0 50px #d6c7ff,
            0 0 80px #b49afc;
        }
        .active-rings i:nth-child(3){
          box-shadow:
            0 0 20px #a78bfa,
            0 0 50px #a78bfa,
            0 0 80px #a78bfa;
        }

        @keyframes animate{
          0%{
            transform:rotate(0deg);
          }
          100%{
            transform:rotate(360deg);
          }
        }
        @keyframes animateReverse{
          0%{
            transform:rotate(360deg);
          }
          100%{
            transform:rotate(0deg);
          }
        }

        /* FORM TRANSITION */
        .show-login{
          animation:
            slideLeft 0.6s ease;
        }
        .show-register{
          animation:
            slideRight 0.6s ease;
        }
        @keyframes slideLeft{
          from{
            opacity:0;
            transform:
              translateX(-80px)
              scale(0.9);
          }
          to{
            opacity:1;
            transform:
              translateX(0px)
              scale(1);
          }
        }

        @keyframes slideRight{
          from{
            opacity:0;
            transform:
              translateX(80px)
              scale(0.9);
          }
          to{
            opacity:1;
            transform:
              translateX(0px)
              scale(1);
          }
        }

        /* BUTTON HOVER */
        .auth-btn:hover{
        transform:
            translateY(-3px)
            scale(1.03);
        box-shadow:
            0 12px 30px
            rgba(114,46,227,0.45);
        filter:brightness(1.08);
        }
      `}</style>
    </div>
   </Layout> 
  );
}

const styles = {

    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
            "linear-gradient(135deg, #97c7e3, #bcb4fd, #732ee3)",
        backgroundSize: "180% 180%",
        animation:
            "gradientBG 10s ease infinite",
        position: "relative",
        paddingTop: "90px",
        paddingBottom: "70px",
        boxSizing: "border-box",
    },
};

export default AuthPage;