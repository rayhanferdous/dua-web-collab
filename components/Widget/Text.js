function Text({ text, height, color }) {
  return <p className={`${text} ${height} ${color}`}>{text}</p>;
}

export default Text;
