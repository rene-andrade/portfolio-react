// src/components/SkillBadge.jsx
export default function SkillBadge({ nome, icone }) {
    return (
        <div className="skill-badge">
            <span className="icone">{icone}</span>
            <span className="skill-nome">{nome}</span>
        </div>
    );
}
