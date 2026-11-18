
import Logo from "../Logo";
import image from '../../assets/illust.png'

function AuthIllustration() {
  return (
    <section className="flex h-full min-h-[650px] flex-col justify-between gap-3 overflow-hidden bg-deep-teal p-8 text-white xl:p-12">

      {/* Logo */}
      <div>
        <Logo light showTagline />
      </div>

      {/* Main content */}
      <div className="mx-auto w-full max-w-lg">
        <h1 className="font-heading text-3xl font-extrabold leading-tight lg:text-4xl">
          Every Great Idea
          <br />
          Starts With
          <span className="text-mint"> You.</span>
        </h1>

        <p className="mt-5 max-w-md text-base leading-7 text-white/70">
          Share your ideas, support your community, and help
          shape products that make a difference.
        </p>

        {/* One image below the content */}
        <img
          src={image}
          alt="Customer sharing an idea"
          className="mt-8 w-full max-w-sm  object-contain"
        />
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 pt-5">
        <p className="text-xs text-white/50">
          © 2026 FeedBoard. Listen. Prioritize. Build Better.
        </p>
      </div>

    </section>
  );
}

export default AuthIllustration;




