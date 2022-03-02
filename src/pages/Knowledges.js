import React from 'react';
import Competences from '../components/datas/competencesData';

const Knowledges = () => {

    return (
        <div className='mt-16 flex'>
            {/* page Compétences */}
            {Competences.map(item => 
            <div key={item.id}>
                <img src={item.image} alt={item.name} />
            </div>   
            )}
        </div>
    );
};

export default Knowledges;