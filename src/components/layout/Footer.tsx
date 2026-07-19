import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:bg-neutral-900 mt-auto">
      <Container>
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} ShopNext Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
