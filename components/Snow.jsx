"use client";

const Snow = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]">
      <div className="snow-layer layer-1"></div>
      <div className="snow-layer layer-2"></div>
      <div className="snow-layer layer-3"></div>
    </div>
  );
};

export default Snow;
