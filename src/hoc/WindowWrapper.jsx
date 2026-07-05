import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();

    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);

    useGSAP(() => {
      const currentEl = ref.current;
      if (!currentEl || !isOpen) return;

      currentEl.style.display = "block";

      gsap.fromTo(
        currentEl,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      );
    }, [isOpen]);

    useGSAP(() => {
      const currentEl = ref.current;
      if (!currentEl) return;

      const [instance] = Draggable.create(currentEl, {
        onPress: () => focusWindow(windowKey),
      });

      return () => {
        instance.kill();
      };
    }, []);

    useLayoutEffect(() => {
      const currentEl = ref.current;
      if (!currentEl) return;
      currentEl.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;
  return Wrapped;
};

export default WindowWrapper;
