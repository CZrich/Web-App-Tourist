import { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Login } from '../../auth/login';
import { AuthContext } from "../../context/ContextoAuth";

export default function LoginForm() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const mando = handleSubmit(async data => {
        try {
            const res = await Login(data);
            login(res.data.token, res.data.role, res.data.email);
            navigate("/servicios");
        } catch (error) {
            console.error("Fallo login", error);
        }
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
            <form 
                onSubmit={mando}
                className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-6"
            >
                {/* Logo / Header */}
                <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-indigo-100">
                        <img src="/assets/img/uss.png" alt="Logo" className="w-16 h-16 object-contain" />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-center text-slate-800">Bienvenido</h2>
                <p className="text-center text-slate-500 text-sm mb-4">Ingresa tus credenciales para continuar</p>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-600">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="ejemplo@correo.com" 
                        {...register("email", { required: "El correo es obligatorio" })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all outline-none"
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-sm font-semibold text-slate-600">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="••••••••" 
                        {...register("password", { required: "La contraseña es obligatoria" })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all outline-none"
                    />
                    {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                </div>

                {/* Button */}
                <button 
                    type="submit"
                    className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all active:scale-95"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
}