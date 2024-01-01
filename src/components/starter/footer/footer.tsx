import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <footer>
      <div class="container">
        Made with ❤️ by <Link href="https://xav.ie">Xav.ie</Link>r
      </div>
    </footer>
  );
});
