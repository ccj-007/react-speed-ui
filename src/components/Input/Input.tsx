import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";
import classNames from "classnames";
import { ChangeEventHandler } from "react";

type InputSize = "lg" | "sm";

export interface InputProps {
	/** 尺寸 */
	size: InputSize;
	/** 前缀 */
	prefix: string;
	/** 后缀 */
	suffix: string;
	/** 初始值input */
	value: any;
	/** 失去焦点需要清除value */
	blurClear: boolean;
	/** 改变的回调 */
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	/** 失去焦点的回调 */
	onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
	className: string;
	children: React.ReactNode;
	style: React.CSSProperties;
}
export type InputExternalProps = Omit<InputProps, "size">;

export type allInputProps = Partial<InputProps> &
	InputHTMLAttributes<HTMLInputElement>;

/**
 * Input  input组件
 */
const Input: React.FC<allInputProps> = (props) => {
	let {
		disabled = false,
		prefix,
		suffix,
		className,
		onChange,
		onBlur,
		blurClear = false,
		...restProps
	} = props;
	const [value, setValue] = useState("");

	const cls = classNames("speed-input", className, {
		disabled: disabled,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
		onChange && onChange(e);
	};

	const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
		blurClear && setValue("");
		onBlur && onBlur(e);
	};

	return (
		<>
			{prefix ? <div className="input-prefix">{prefix}</div> : ""}
			<input
				className={cls}
				{...restProps}
				onChange={handleChange}
				onBlur={handleBlur}
				value={value}
			/>
			{suffix ? <div className="input-suffix">{suffix}</div> : ""}
		</>
	);
};

Input.defaultProps = {
	disabled: false,
	prefix: "",
	suffix: "",
	value: "",
	blurClear: false,
};

export default Input;
