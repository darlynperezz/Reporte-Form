import React, { useState } from "react";
import { Input } from "../Components/Input";
import { Botton } from "../Components/Botton";
import Swal from 'sweetalert2';

export const ReportForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    servicio: "",
    descripcion: "",
    fecha: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, cedula, servicio, descripcion, fecha } = formData;

    if (!nombre || !cedula || !servicio || !descripcion || !fecha) {
      Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Completa los campos de manera correcta!",
        footer: ""
      });
      return;
    }

    // Mostrar en consola
    console.log("Reporte enviado:", formData);

    // Alerta SweetAlert2
    Swal.fire({
      title: "¡Reporte enviado!",
      text: "Tu reporte fue enviado con éxito.",
      icon: "success",
      confirmButtonText: "Cerrar",
    });

    // Limpiar el formulario
    setFormData({
      nombre: "",
      cedula: "",
      servicio: "",
      descripcion: "",
      fecha: "",
    });
  };

  return (
    <div className="flex justify-center py-12 bg-gray-100 min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-altice-dark text-center">
          Reportar Problema
        </h2>
        <Input label="Nombre completo" name="nombre" value={formData.nombre} onChange={handleChange} />
        <Input label="Cédula o Número de contrato" name="cedula" value={formData.cedula} onChange={handleChange} />
        <Input label="Servicio afectado (ej. Internet)" name="servicio" value={formData.servicio} onChange={handleChange} />
        <Input label="Descripción del problema" name="descripcion" value={formData.descripcion} onChange={handleChange} />
        <Input label="Fecha del problema" name="fecha" type="date" value={formData.fecha} onChange={handleChange} />
        <Botton>Enviar Reporte</Botton>
      </form>
    </div>
  );
};
