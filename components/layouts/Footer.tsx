const year = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="footer flex flex-row justify-between p-2 md:p-5 text-black border">
      <div className="subfooter-left flex flex-col md:flex-col px-2 md:px-5">
        <h1 className="title text-md md:text-xl font-black rounded-lg">
          Unconditional.
        </h1>
        <p className="text-transparent text-sm md:text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          © {year} All rights reserved.
        </p>
      </div>
      <div className="subfooter-right flex flex-col md:flex-col px-2 md:px-5">
        <p className="title text-md md:text-xl font-black rounded-lg">
          Contribute to think{" "}
        </p>
        <ul className="text-sm md:text-md flex gap-2 md:gap-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
          <li>
            <a href="https://github.com/unconditionalday">Github</a>
          </li>
          <li>
            <a href="https://twitter.com/unconditionalday">Twitter</a>
          </li>
          <li>
            <a href="https://unconditional.day/about">About</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
