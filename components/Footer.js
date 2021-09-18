const Footer = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14  bg-gray-200 text-gray-600 ">
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works.</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accesibility</p>
        <p>This is a portfolio site.</p>
        <p>Pretty cool right?</p>
        <p>Built under five hours.</p>
        <p>Hire Me</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Ernest Nnamdi</p>
        <p>presents</p>
        <p>Airbnb clone </p>
        <p>using nextJS</p>
        <p>with tailwind.</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help centre</p>
        <p>Trust & Safety</p>
        <p>want to list?</p>
        <p>safety guidelines</p>
        <p>locations</p>
      </div>
    </div>
  );
};

export default Footer;
