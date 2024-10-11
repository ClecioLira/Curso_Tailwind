const Login = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="w-96 pt-40">
        <h2 className="font-bold text-center text-xl mb-4">Login</h2>

        <div className="bg-white shadow-md rounded-md p-4 space-y-3">
          <div>
            <label className="block text-sm mb-2">
              Email
              <input
                type="email"
                required
                className="w-full border border-gray-400 px-4 py-2 rounded-md"
              />
            </label>
          </div>

          <div>
            <label className="text-sm mb-2">
              Senha
              <input
                type="password"
                required
                className="w-full border border-gray-400 px-4 py-2 rounded-md"
              />
            </label>
          </div>

          <div className="text-right">
            <a className="text-sm hover:underline cursor-pointer">Esqueci minha senha</a>
          </div>

          <div>
            <button className="w-full mt-5 px-3 py-2 bg-gray-800 rounded text-white hover:scale-105 duration-150">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
