import { Button } from "@/ui/Button";
import { COLOR_THEME } from "@/constants";
import { classNames } from "@/lib/utils";

export default function SimpleNewsletter() {
  return (
    <div
      className={classNames(
        "py-16 sm:py-24 lg:py-32",
        COLOR_THEME.background.tertiary
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div
          className={`max-w-xl text-3xl font-bold tracking-tight ${COLOR_THEME.context.h1} sm:text-4xl lg:col-span-7`}
        >
          <h2 className="inline sm:block lg:inline xl:block">
            Want product news and updates?
          </h2>{" "}
          <p className="inline sm:block lg:inline xl:block">
            Sign up for our newsletter.
          </p>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={`min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 ${COLOR_THEME.context.h1} shadow-sm ring-1 ring-inset ${COLOR_THEME.ring.tertiary} placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${COLOR_THEME.ring.tertiaryFocus} sm:text-sm sm:leading-6`}
              placeholder="Enter your email"
            />
            <Button
              type="submit"
              className={[
                COLOR_THEME.background.primary,
                COLOR_THEME.background.primaryHover,
              ].join(" ")}
              onClick={() => {
                alert("click");
              }}
            >
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            We care about your data. Read our{" "}
            <a
              href="#"
              className={`font-semibold ${COLOR_THEME.text.primary} ${COLOR_THEME.text.primaryHover}`}
            >
              privacy&nbsp;policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}
