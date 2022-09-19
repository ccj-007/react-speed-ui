import React from "react";
import Statistic from "./Statistic";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageHeader } from "../index";
import Icon from "../Icon";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const { Countdown } = Statistic;

export default {
  title: "数据展示/Statistic 统计数值",
  component: Statistic,
  parameters: {
    docs: {
      description: {
        component: "### 用于统计数据",
      },
    },
  },
} as ComponentMeta<typeof Statistic>;

/**
 * 展示面板
 */
const defaultStatisticTpl: ComponentStory<typeof Statistic> = (args) => {
  const [run, setRun] = React.useState(true)
  const handleChange = (val) => {
    console.log(val);

    if (val === 0) {
      setRun(false)
    }
  }
  return (
    <>
      <PageHeader title="基本使用" />
      <Statistic title="Active Users" value={112893} prefix={<Icon icon={solid("cart-shopping")} size="1x" color="#38a1e7"></Icon>} />
      <PageHeader title="倒计时" />
      <Countdown countType="count" count={100} onChange={handleChange} run={run}></Countdown>

      {/* <Countdown countType="day" format='HH:mm:ss' ></Countdown> */}
      <PageHeader title="日期" />
      <Countdown countType="day" format='YYYY-MM-DD HH:mm:ss'></Countdown>

      {/* <Statistic>
        <Countdown></Countdown>
      </Statistic> */}
    </>
  );
};

/**
 * 参数面板
 */
export const defaultStatistic = defaultStatisticTpl.bind({});
defaultStatistic.args = {};
