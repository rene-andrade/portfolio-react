import React from 'react'

function ProjectCards({ titulo, descricao, link }) {
    return (
        <>
            <div className="card">
                <h3>{titulo}</h3>
                <p>{descricao}</p>
                <a href={link} target="_blank">Ver repositório</a>
            </div>
        </>
    )
}

export default ProjectCards