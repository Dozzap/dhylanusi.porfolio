function Header() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="flex flex-row text-xs sm:text-xl justify-between items-center bg-gray-800 text-white! p-4 sm:px-10 fixed w-full z-10">
      <h1 className="cursor-pointer" onClick={() => scrollToSection('welcome')}>Liebespace</h1>
      <nav>
        <ul className="flex flex-row justify-between items-center space-x-4">
          <li className="cursor-pointer" onClick={() => scrollToSection('about')}>about me</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('experience')}>experience</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('papers')}>papers</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('projects')}>projects</li>
          <li className="cursor-pointer" onClick={() => scrollToSection('contact')}>contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
