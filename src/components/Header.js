import React from 'react';
import { FaArrowLeft, FaHatWizard } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Header = ({ isHome = false }) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }

    return (
        <header className="App-header">
            {!isHome ? <FaArrowLeft className="back-btn" onClick={() => goToHome()} /> : ""}
            <div className="title-wrapper">
                <FaHatWizard className="logo" />
                <h1>Au sorcier moderne</h1>
            </div>
        </header>
    )
}

export default Header;
