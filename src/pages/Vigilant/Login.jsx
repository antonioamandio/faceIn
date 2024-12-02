export function Login() {
  return (
    <>
      <div className="flex h-screen items-center">
        <div className="w-full lg:w-1/2 lg:px-8 px-6 py-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Logotipo"
              src="/assets/logo.svg"
              className="mx-auto h-16 w-auto"
            />
            <h2 className="mt-5 text-center text-2xl/7 font-bold tracking-tight text-green-400">
              Bem-vindo de volta
            </h2>
            <p className="text-slate-500 text-center text-sm mt-4">
              Junte-se para poder fazer o monitoramento dos alunos.
            </p>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block border-0 w-full rounded-md pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm/6 outline-none"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Senha
                  </label>
                  {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-green-600 hover:text-green-500"
                    >
                      Esqueceu a senha?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block border-0 w-full rounded-md pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-400 sm:text-sm/6 outline-none"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-green-500"
                >
                  Entrar
                </button>
              </div>
            </form>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Ainda não tem uma conta?
              <a
                href="#"
                className="ml-2 font-semibold text-green-400 hover:text-green-500"
              >
                Registre-se
              </a>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 h-screen w-screen bg-school bg-cover bg-no-repeat bg-center bg-blend-multiply"></div>
      </div>
    </>
  );
}
