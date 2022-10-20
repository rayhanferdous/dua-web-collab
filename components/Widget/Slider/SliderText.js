export default function SliderText({ text, active }) {
  return (
    <div className={`${active ? "active" : ""} carousel-item float-left h-170 w-full relative`}>
      <div className="carousel-caption hidden md:block absolute h-170">
        <div className="flex flex-col justify-center h-170">
          <p className="text-lg text-center leading-9">{text}</p>
        </div>
      </div>
    </div>
  );
}
