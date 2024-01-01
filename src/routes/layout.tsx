import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import Footer from "~/components/starter/footer/footer";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
