import React from 'react';
import SkillsInfo from '../components/datas/competencesData'

const Knowledges = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            {/* page Compétences */}
            <div className='bg-div-white rounded-lg border shadow-lg mx-5 md:mx-36 flex flex-wrap justify-center'>
               {SkillsInfo.map(item => 
                    <div className='' key={item.id}>
                        <img src={item.image} alt={item.name} />
                    </div>    
                )}
            </div>
        </div>
    );
};

export default Knowledges;