import React from "react";
import AutoComplete from "./autoComplete";
import { action } from "@storybook/addon-actions";

export default {
	title: "数据录入/AutoComplete",
	component: AutoComplete,
};

const defaultAutoCompleteTpl = (args: any) => {
	let lakers = [
		{ value: "aaa", name: "我的小A" },
		{ value: "bbb", name: "我的小B" },
		{ value: "ccc", name: "我的小C" },
		{ value: "ddd", name: "我的小D" },
		{ value: "eee", name: "我的小E" },
		{ value: "fff", name: "我的小F" },
		{ value: "ggg", name: "我的小G" },
	];
	// const handleFetch = (query: string) => {
	//   return lakers.filter(item => item.value.includes(query)).map(item => item.value)
	// }

	//测试异步
	const handleFetch = (query: string) => {
		return fetch(`https://api.github.com/search/users?q=${query}`)
			.then((res) => res.json())
			.then(({ items }) => {
				console.log(items);
				return items
					.slice(0, 10)
					.map((item: any) => ({ value: item.login, ...item }));
			});
	};

	const renderOptions = (item: any) => {
		return <div>{item.value}</div>;
	};

	return (
		<>
			<h6>自动补全的input输入框</h6>
			<div>
				<AutoComplete
					renderOptions={renderOptions}
					onSelect={() => action("selected")}
					fetchSuggestions={handleFetch}
					{...args}
				></AutoComplete>
			</div>
		</>
	);
};
export const defaultAutoComplete: any = defaultAutoCompleteTpl.bind({});
defaultAutoComplete.args = {};
