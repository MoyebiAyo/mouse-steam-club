import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-blue mb-4">404</h1>
        <h2 className="text-3xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-foreground/70 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-primary-blue text-white px-8 py-4 rounded-2xl font-bold hover:opacity-90 transition-all hover:shadow-xl"
        >
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
