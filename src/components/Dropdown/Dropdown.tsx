import React, { FC } from "react";
import classNames from "classnames";

export type PlacementType = "b" | "t" | "l" | "r";
export type DropmenuType = {
  key: string | number;
  label: React.ReactElement;
};

export interface DropdownProps {
  menu: DropmenuType[];
  disabled?: boolean;
  className?: string;
  childClassName?: string;
  trigger?: "click" | "hover";
  placement?: PlacementType;
  onClickChange?: (subMenu: any) => void;
  children?: React.ReactNode;
}

const Dropdown: FC<DropdownProps> = (props) => {
  let {
    menu = [{ key: "1", label: "" }],
    disabled,
    childClassName,
    trigger = "hover",
    placement = "b",
    onClickChange,
    children,
  } = props;

  const [visible, setVisible] = React.useState(false);
  let btnRef = React.useRef<HTMLDivElement>(null);
  let menuRef = React.useRef<HTMLDivElement>(null);

  const menuClasses = classNames("speed-subMenu", childClassName, {
    ["disabled"]: disabled,
  });

  const openDropdown = () => {
    if (trigger === "click") {
      setVisible(!visible);
    }
  };

  React.useEffect(() => {
    if (trigger === "hover") {
      let btnDOM = btnRef.current;
      let menuDOM = menuRef.current;

      let flag = false;
      if (btnDOM) {
        btnDOM.onmouseenter = () => {
          console.log("into");

          setVisible(true);
        };
        btnDOM.onmouseleave = () => {
          console.log("leave");

          setTimeout(() => {
            if (!flag) {
              setVisible(false);
            }
          }, 2000);
        };
      }
      if (menuDOM) {
        menuDOM.onmouseenter = () => {
          flag = true;
          setVisible(true);
        };
        menuDOM.onmouseleave = () => {
          flag = false;
          setVisible(false);
        };
      }
    }
  }, []);
  const handleClickChange = (subMenu: any) => {
    onClickChange && onClickChange(subMenu);
  };

  const child = React.Children.only(children) as React.ReactElement<any>;
  console.log(child);

  const menuBox = (
    <div ref={btnRef}>
      <div>{child.props.children}</div>
      <div className={`speed-menu speed-dropdown-${placement}`} ref={menuRef}>
        {visible &&
          menu.map((subMenu) => {
            return (
              <div
                className={menuClasses}
                onClick={() => {
                  handleClickChange(subMenu);
                }}
                key={subMenu.key}
              >
                {subMenu.label}
              </div>
            );
          })}
      </div>
    </div>
  );
  const childBox = React.cloneElement(
    child,
    {
      className: classNames("speed-dropdown-warp"),
      onClick: openDropdown,
    },
    menuBox
  );
  return <>{childBox}</>;
};

export default Dropdown;
