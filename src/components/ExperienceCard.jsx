const ExperienceCard = ({ role, company, duration, responsibilities }) => {
    return (
        <div className="experience-card">
            <h3>{role}</h3>
            <p className="company">{company}</p>
            <p className="duration">{duration}</p>
            <ul className="responsibilities">
                {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;
