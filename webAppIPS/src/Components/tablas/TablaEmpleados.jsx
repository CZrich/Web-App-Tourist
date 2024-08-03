import React from 'react'
import { useEffect, useState } from "react"
import { GetEmpleados } from '../../Services/servicios.empleados';
import { Link } from 'react-router-dom';
export default function TablaEmpleados() {
    const [empleado, setEmpleado] = useState([]);

    useEffect(() => {

        const emp = async () => {
            const res = await GetEmpleados();
            console.log(res.data);
            setEmpleado(res.data);
        }
        emp();
    }, [])

    return (
        <div className='flex flex-col justify-center items-center m-5 relative overflow-x-auto'>
            <h2>Tabla Empleados</h2>
            <table className='w-[800px] text-sm text-left rtl:text-right text-gray-800 dark:text-gray-400'>
                <thead className='text-xs text-gray-900 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400'>
                    <tr className=''>
                        <th scope='col' className='px-6 py-3'>Nombre</th>
                        <th scope='col' className='px-6 py-3'>Apellido</th>
                        <th scope='col' className='px-6 py-3'>direccion</th>
                        <th scope='col' className='px-6 py-3'>DNI</th>
                        <th scope='col' className='px-6 py-3'>Fecha Nacimiento</th>
                        <th scope='col' className='px-6 py-3'>Nacionalidad</th>
                        <th scope='col' className='px-6 py-3'>Celular</th>
                        <th scope='col' className='px-6 py-3'>Email</th>
                        <th scope='col' className='px-6 py-3'></th>
                        <th scope='col' className='px-6 py-3'></th>

                    </tr>



                </thead>
                <tbody>
                    {empleado?.map((empleado) => (
                        <tr key={empleado.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                            <td className='px-6 py-3'>{empleado.name}</td>
                            <td className='px-6 py-3'>{empleado.username}</td>
                            <td className='px-6 py-3'>{empleado.address.city}</td>
                            <td className='px-6 py-3'>{empleado.address.zipcode}</td>
                            <td className='px-6 py-3'>{empleado.website}</td>
                            <td className='px-6 py-3'>{empleado.website}</td>
                            <td className='px-6 py-3'>{empleado.phone}</td>
                            <td className='px-6 py-3'>{empleado.email}</td>
                            <td className='px-6 py-3'>
                                <button className='bg-rose-600  p-2 rounded-lg text-white'>
                                    Eliminar
                                </button>
                            </td>
                            <td className='px-6 py-3'>
                                <button className='bg-green-600 p-2 rounded-lg text-white'>Editar</button>
                            </td>
                        </tr>
                    ))}

                </tbody>




            </table>
        </div>
    )
}
