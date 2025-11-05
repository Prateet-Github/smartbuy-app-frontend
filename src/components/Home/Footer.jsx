const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-6 mt-10">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SmartBuy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
