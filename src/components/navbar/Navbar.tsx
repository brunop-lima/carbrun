import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContex";

function Navbar() {

    const navigate = useNavigate();

    const {handleLogout} = useContext(AuthContext);

    function logout() {
        handleLogout()
        alert('O Usuario foi Deslogado com Sucesso!')
        navigate('/')
    }
    
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-pink-500		 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">CarBrun Grafica</Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        Sobre
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar