const LanguageSettings = () => {
  return (
    <div className={`py-6  animate-scale-down`}>
      <div className="flex flex-row gap-x-3 mx-4 justify-center animate-scale-down">
        <button className="btn drop-shadow-  w-29 h-10 text-ms ">English</button>
        <button className="btn-outline text-title w-29 h-10 text-ms  dark:border-[#96a2b4]">বাংলা</button>
      </div>
    </div>
  );
};

export default LanguageSettings;
