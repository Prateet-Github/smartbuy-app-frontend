const Eye = ({ cursor, isTypingPassword }) => {
  const offsetX = (cursor.x - window.innerWidth / 2) / 80;
  const offsetY = (cursor.y - window.innerHeight / 2) / 80;

  return (
    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center overflow-hidden">
      <div
        className="w-2 h-2 bg-black rounded-full transition-transform duration-100"
        style={{
          transform: isTypingPassword
            ? "translateY(-10px)" // look away
            : `translate(${offsetX}px, ${offsetY}px)`,
        }}
      />
    </div>
  );
};

export default Eye;
