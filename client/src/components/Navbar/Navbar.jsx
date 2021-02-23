import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
        const navToggle = document.getElementsByClassName("toggle");
        for (let i=0; i< navToggle.length; i++) {
            navToggle.item(i).classList.toggle("hidden");
        }
    };


    return (
        <nav class="flex flex-wrap items-center justify-between p-5 bg-blue-200">
      <h1>Thrift World</h1>
      <div class="flex md:hidden">
        <button id="hamburger">
          <i class="fas fa-bars toggle block"  />
          <i class="fas fa-times toggle hidden" />
        </button>
      </div>
      <div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 mde:border-none">
          <Link class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Link 1
          </Link>
          <Link class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Link 2
          </Link>
          <Link class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Link 3
          </Link>
          <Link class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Link 4
          </Link>
      </div>
    </nav>
    );
};

export default Navbar;