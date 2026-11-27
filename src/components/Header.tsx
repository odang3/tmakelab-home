import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { profile } from '../data/profile';

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header__in">
        <Link to="/" className="logo" onClick={close}>
          <span className="logo__mark" aria-hidden="true">t</span>
          {profile.brand}
        </Link>
        <nav className="nav" id="site-nav" data-open={open} aria-label="주요 메뉴">
          {links.map((l) => (
            <Link key={l.id} to={{ pathname: '/', hash: `#${l.id}` }} onClick={close}>
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <button
          type="button"
          className="icon-btn burger"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
