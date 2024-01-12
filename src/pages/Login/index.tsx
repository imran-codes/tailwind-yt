import PageLayout from "../../components/PageLayout";
import loginBg from "../../assets/login-bg.jpg";
import LogoSection from "../../modules/Login/LogoSection";
import LoginForm from "../../modules/Login/LoginForm";
import ContinueWithGoogle from "../../modules/Login/ContineWithGoogle";

const Login = () => {
  return (
    <PageLayout>
      <div className="flex flex-1 min-h-screen">
        {/* Left hand column */}
        <div className="flex flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:flex-none xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <LogoSection />
            <LoginForm />
            <ContinueWithGoogle />
          </div>
        </div>

        {/* Right hand column */}
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            src={loginBg}
            alt="BallersBoutique"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Login;
