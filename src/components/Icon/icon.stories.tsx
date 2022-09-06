import React, { useContext } from "react";
import Icon from "./Icon";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageHeader from "../PageHeader";

export default {
	title: "通用/Icon",
	component: Icon,
	parameters: {
		docs: {
			description: {
				component: "### 用于表达特殊意味的辅助符号",
			},
		},
	},
} as ComponentMeta<typeof Icon>;

export const defaultIconTpl: ComponentStory<typeof Icon> = () => {
	const { getPrefixCls } = useContext(ConfigContext);
	let prefixCls = getPrefixCls("icon");

	return (
		<>
			<PageHeader title={"基础图标"} />
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<div className={prefixCls}>
					<Icon icon={solid("angle-down")} size="5x" color="#4c4c4c"></Icon>
					angle-down
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("angle-up")} size="5x" color="#4c4c4c"></Icon>
					angle-up
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("angle-left")} size="5x" color="#4c4c4c"></Icon>
					angle-left
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("angle-right")} size="5x" color="#4c4c4c"></Icon>
					angle-right
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("circle-xmark")} size="5x" color="#4c4c4c"></Icon>
					circle-xmark
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("check")} size="5x" color="#4c4c4c"></Icon>
					check
				</div>
				<div className={prefixCls}>
					<Icon
						icon={solid("arrow-rotate-right")}
						size="5x"
						color="#4c4c4c"
					></Icon>
					arrow-rotate-right
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("plus")} size="5x" color="#4c4c4c"></Icon>
					plus
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("play")} size="5x" color="#4c4c4c"></Icon>
					play
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("question")} size="5x" color="#4c4c4c"></Icon>
					question
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("book")} size="5x" color="#4c4c4c"></Icon>
					book
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("cart-shopping")} size="5x" color="#4c4c4c"></Icon>
					cart-shopping
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("clone")} size="5x" color="#4c4c4c"></Icon>
					clone
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("comments")} size="5x" color="#4c4c4c"></Icon>
					comments
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("filter")} size="5x" color="#4c4c4c"></Icon>
					filter
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("images")} size="5x" color="#4c4c4c"></Icon>
					images
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("indent")} size="5x" color="#4c4c4c"></Icon>
					indent
				</div>
				<div className={prefixCls}>
					<Icon
						icon={solid("magnifying-glass")}
						size="5x"
						color="#4c4c4c"
					></Icon>
					magnifying-glass
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("lock")} size="5x" color="#4c4c4c"></Icon>
					lock
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("volume-xmark")} size="5x" color="#4c4c4c"></Icon>
					volume-xmark
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("share")} size="5x" color="#4c4c4c"></Icon>
					share
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("share-nodes")} size="5x" color="#4c4c4c"></Icon>
					share-nodes
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("rss")} size="5x" color="#4c4c4c"></Icon>
					rss
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("trash-can")} size="5x" color="#4c4c4c"></Icon>
					trash-can
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("upload")} size="5x" color="#4c4c4c"></Icon>
					upload
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("spinner")} size="5x" color="#4c4c4c"></Icon>
					spinner
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("volume-high")} size="5x" color="#4c4c4c"></Icon>
					volume-high
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("wifi")} size="5x" color="#4c4c4c"></Icon>
					wifi
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("user")} size="5x" color="#4c4c4c"></Icon>
					user
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("house")} size="5x" color="#4c4c4c"></Icon>
					house
				</div>
			</div>
			<PageHeader title={"动画图标"} />

			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<div className={prefixCls}>
					<Icon
						icon={solid("spinner")}
						size="5x"
						color="#222222"
						className="fa-spin"
					></Icon>
					fa-spin
				</div>
				<div className={prefixCls}>
					<Icon
						icon={solid("check")}
						size="5x"
						color="#222222"
						className="fa-beat"
					></Icon>
					fa-beat
				</div>

				<div className={prefixCls}>
					<Icon
						icon={solid("comments")}
						size="5x"
						color="#222222"
						className="fa-fade"
					></Icon>
					fa-fade
				</div>
				<div className={prefixCls}>
					<Icon
						icon={solid("rss")}
						size="5x"
						color="#222222"
						className="fa-bounce"
					></Icon>
					fa-bounce
				</div>

				<div className={prefixCls}>
					<Icon
						icon={solid("user")}
						size="5x"
						color="#222222"
						className="fa-flip"
					></Icon>
					fa-flip
				</div>
				<div className={prefixCls}>
					<Icon
						icon={solid("house")}
						size="5x"
						color="#222222"
						className="fa-shake"
					></Icon>
					fa-shake
				</div>
			</div>

			<PageHeader title={"不同尺寸的图标"} />

			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<div className={prefixCls}>
					<Icon icon={solid("house")} size="1x" color="#222222"></Icon>
					1x
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("house")} size="2x" color="#222222"></Icon>
					2x
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("house")} size="3x" color="#222222"></Icon>
					3x
				</div>
				<div className={prefixCls}>
					<Icon icon={solid("house")} size="5x" color="#222222"></Icon>
					5x
				</div>
			</div>

			<PageHeader title={"不同颜色的图标"} />

			<div style={{ display: "flex", flexWrap: "wrap" }}>
				<div className={prefixCls}>
					<Icon icon={solid("house")} size="5x" color="#e95858"></Icon>
					#892424
				</div>

				<div className={prefixCls}>
					<Icon icon={solid("house")} size="5x" color="#38b769"></Icon>
					#14843f
				</div>

				<div className={prefixCls}>
					<Icon icon={solid("house")} size="5x" color="#e09c27"></Icon>
					#a27321
				</div>

				<div className={prefixCls}>
					<Icon icon={solid("house")} size="5x" color="#258fc4"></Icon>
					#1f5976
				</div>
			</div>
		</>
	);
};
