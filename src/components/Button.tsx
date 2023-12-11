import clsx from "clsx";
import { ComponentProps, splitProps } from "solid-js";

type ButtonProps = ComponentProps<"button"> & { variant: "primary" };

function Button(props: ButtonProps) {
  const [local, others] = splitProps(props, ["class", "children", "variant"]);

  return (
    <button
      type="button"
      class={clsx(
        "inline-block rounded px-6 pb-2 pt-2.5 font-medium leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0",
        {
          "bg-blue-500 text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]":
            local.variant === "primary"
        },
        local.class
      )}
      {...others}
    >
      {local.children}
    </button>
  );
}

export default Button;
