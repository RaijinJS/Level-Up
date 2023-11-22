//TODO: Add actual auth logic
// TODO: Add register logic

// TODO: Move form logic into a separate component. In this component we will add the auth logic.

import SignInForm from "../../components/SignInForm/SignInForm"

// TODO: Delete below login handler after auth?
// const handleLogin = () => {
//   window.location.href = "/HomePage";
// };

export default function SignIn() {
  return (
      <div className="flex flex-col min-h-screen grow items-center justify-center">
      <div className="flex flex-col items-center w-full px-6 py-8 text-center md:w-1/2 lg:w-1/3">
        <h1 className="text-4xl font-bold text-gray-700">Welcome back!</h1>
        <SignInForm />
    </div>
    </div>
  );
}
