import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("training", "routes/training/index.tsx"),
  route("training/short-courses", "routes/training/short-courses.tsx"),
  route("training/professional", "routes/training/professional.tsx"),
  route("training/vendor-based", "routes/training/vendor-based.tsx"),
  route("certifications", "routes/certifications.tsx"),
  route("solutions", "routes/solutions.tsx"),
  route("infrastructure", "routes/infrastructure.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("enroll", "routes/enroll.tsx"),
] satisfies RouteConfig;
