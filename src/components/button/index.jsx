import { Children, createElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ size, variant, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "rounded-full flex items-center justify-center font-bold  transition-colors",
        {
          "px-4 h-8 text-sm": size == "small",
          "px-4 h-9": size == "normal",
          "px-4 text-[17px] h-[52px] w-full": size == "large",
          "bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white": variant == "primary",
          "bg-[#eff3f4] hover:bg-[#d7dbdc] text-black": variant == "white",
        }
      ),
    },
    children
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(["small", "normal", "large"]),
  variant: PropTypes.oneOf(["primary", "white"]),
};

Button.defaultProps = {
  size: "normal",
  variant: "primary",
};
