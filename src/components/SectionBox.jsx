import './SectionBox.css';

const SectionBox = ({ title, children }) => {
  return (
    <div className="section-box">
      {title && <div className="section-box-title">{title}</div>}
      <div className="section-box-content">
        {children}
      </div>
    </div>
  );
};

export default SectionBox;