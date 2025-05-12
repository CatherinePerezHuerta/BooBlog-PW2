const Title = ({ text, level = 1, className }) => {
    const Tag = `h${level}`;
    return <Tag className={className}>{text}</Tag>;
  };
  
  export default Title;