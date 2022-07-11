import React from "react";
import classNames from "classnames";

export interface DividerProps {
	type?: "horizontal" | "vertical";
	orientation?: "left" | "right" | "center";
	orientationMargin?: string | number;
	className?: string;
	children?: React.ReactNode;
	dashed?: boolean;
	style?: React.CSSProperties;
	plain?: boolean;
}

const Divider: React.FC<DividerProps> = (props) => {
	const {
		type = "horizontal",
		orientation = "center",
		orientationMargin,
		className,
		children,
		dashed = false,
		plain,
		...restProps
	} = props;

	const hasCustomMarginLeft = orientation === "left";
	const hasCustomMarginRight = orientation === "right";

	const classes = classNames("divider-inner-text", className, {
		[`divider-orientation-left`]: hasCustomMarginLeft,
		[`divider-orientation-right`]: hasCustomMarginRight,
	});
	const warpClasses = classNames("divider", {
		[`divider-dashed`]: dashed && type === "horizontal",
		[`divider-solid`]: !dashed && type === "horizontal",
		[`divider-${type}`]: type,
	});

	const innerStyle = {
		...(hasCustomMarginLeft &&
			orientationMargin && { marginLeft: orientationMargin }),
		...(hasCustomMarginRight &&
			orientationMargin && { marginRight: orientationMargin }),
	};

	console.log(innerStyle);

	return (
		<>
			<div className={warpClasses} {...restProps}>
				{children && (
					<span className={classes} style={innerStyle}>
						{children}
					</span>
				)}
			</div>
		</>
	);
};

export default Divider;
