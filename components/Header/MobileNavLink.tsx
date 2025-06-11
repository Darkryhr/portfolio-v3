import Link from 'next/link';
import { useRouter } from 'next/router';

const MobileNavLink = ({ children, href, closeMenu, index, open = false }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link
      style={{ animationDelay: `${index * 110}ms` }}
      href={href}
      className={`text-center font-black uppercase tracking-wide text-3xl opacity-0 ${
        isActive
          ? "text-amber-400 before:content-['|'] before:inline-block before:mr-2 before:text-4xl"
          : ''
      }
      ${open ? 'animate-fade-in' : ''}
      
      `}
      onClick={() => closeMenu()}
    >
      {children}
    </Link>
  );
};

export default MobileNavLink;
