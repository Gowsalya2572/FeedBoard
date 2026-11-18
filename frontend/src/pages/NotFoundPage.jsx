
import React from 'react'
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
   return (
    <div className="flex min-h-screen items-center justify-center bg-app-bg px-5">
      <div className="text-center">
        <h1 className="font-heading text-5xl font-extrabold text-deep-teal">
          404
        </h1>

        <p className="mt-3 text-slate-500">Page not found.</p>

        <Link
          to="/"
          className="mt-5 inline-block font-semibold text-primary-teal hover:text-deep-teal"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage
