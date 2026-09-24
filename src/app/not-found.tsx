import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className=" text-primary text-8xl font-extrabold tracking-tight">
          404
        </h1>
        <h2 className="text-2xl font-bold mt-4">
          Page Not Found
        </h2>
        <p className="mt-3 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>
        <Link
          href="/"
          className="btn bg-primary text-black border-none rounded-full px-8 hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;