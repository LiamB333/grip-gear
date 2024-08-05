import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const portalRoot = useRef(document.createElement("div"));

  useEffect(() => {
    const currentRoot = portalRoot.current;
    document.body.appendChild(currentRoot);
    return () => {
      document.body.removeChild(currentRoot);
    };
  }, []);

  return createPortal(children, portalRoot.current);
};

export default Portal;
    