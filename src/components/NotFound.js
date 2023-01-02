import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => <div className='notFound'><p>Ce n'est pas le bon chemin...</p><Link to={`/`}><h2>Retour à la boutique</h2></Link></div>

export default NotFound;