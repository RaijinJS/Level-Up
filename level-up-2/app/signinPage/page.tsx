import SignInForm from "../../components/SignInForm/SignInForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

//TODO: DONE - Add actual auth logic

// TODO: DONE - Move form logic into a separate component. In this component we will add the auth logic.

// TODO: DONE - Delete below login handler after auth?

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/HomePage");

  return (
    <div className="flex flex-col min-h-screen grow items-center justify-center">
      <div className="flex flex-col items-center w-full px-6 py-8 text-center md:w-1/2 lg:w-1/3">
        <h1 className="text-4xl font-bold text-gray-700">Welcome back!</h1>
        <SignInForm />
      </div>
    </div>
  );
}
