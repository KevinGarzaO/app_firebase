import React, {useState} from 'react';
import styled from 'styled-components';
import db from '../firebase/firebaseConfig';
import Contacto from './Contacto';

const ListaContactos = () => {
    const [contactos, setContactos] = useState([
        {id:1, nombre: 'Kevin', correo: 'correo'},
        {id:2, nombre: 'Astolfo', correo: 'correo 2'},
    ]);

    return ( 
        contactos.length > 0 &&
        <ContenedorContactos>
            {contactos.map((contacto) => (
                <Contacto   key={contacto.id}
                            id={contacto.id}
                            nombre={contacto.nombre}
                            correo={contacto.correo}
                />
            ))}
        </ContenedorContactos>
     );
}

    const ContenedorContactos = styled.div`
        margin-top: 40px;
    `;

export default ListaContactos;