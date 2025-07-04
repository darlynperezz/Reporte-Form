import React, { useState } from "react";
import { Input } from "../Components/Input";
import { Botton } from "../Components/Botton";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const LoginUser = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (phone && password) {
            navigate("/report");
        } else {
            Swal.fire({
                icon: "error",
                title: "Error...",
                text: "Completa los campos de manera correcta!",
                footer: ""
            });
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <form
                onSubmit={handleLogin}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-altice-dark text-center">
                    Iniciar Sesión
                </h2>
                <Input
                    label="Número de teléfono"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Botton>Entrar</Botton>
            </form>
        </div>
    );
};
