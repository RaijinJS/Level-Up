import RegisterForm from "../../components/RegisterForm/RegisterForm";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen grow items-center justify-center">
      <div className="flex flex-col items-center w-full px-6 py-8 text-center md:w-1/2 lg:w-1/3">
        <h1 className="text-4xl font-bold text-gray-700">Welcome!</h1>
        <RegisterForm />
      </div>
    </div>
  );
}
