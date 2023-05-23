import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setName } from "../store/slices/username.slice";

const ProtectedRoutes = () => {
  const dispatch = useDispatch()

  // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que
  // Importa es que valide si el usuario está loggeado o no
  if (localStorage.getItem("name") != null) { 
    dispatch(setName(localStorage.getItem("name")))
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
 // Aquí le debemos decir la ruta a la que queremos llevar
}; // al usuario si no está autenticado

export default ProtectedRoutes; 