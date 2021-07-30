import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <div>
      <h2>Simple Header</h2>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>Home Page</Link>
          </li>
          <li>
            <Link href={'/staticPropsExample'}>Static Prop Example Page</Link>
          </li>
          <li>
            <Link href={'/about'}>About Page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
