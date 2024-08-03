import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["kg", "ru", "tr"],
  defaultLocale: "ru",
});

export const config = {
  matcher: ["/", "/(ru|kg|tr)/:path*"],
};
