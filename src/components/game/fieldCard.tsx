

const FieldCard = () => {
  return (
    <div
      className="flex justify-center items-center border-4 rounded-[5px] bg-white border-gray-300 
     h-[120px] w-[100px] pointer-events-none shadow-lg"
    >
      <div className="field-box relative bg-white border border-gray-400 rounded-[5px] h-[100px] w-[80px]">
        <div style={{ display: 'none' }}></div>
        <div className="h-full w-full absolute bg-slate-500"></div>
      </div>
    </div>
  );
};

export default FieldCard;
