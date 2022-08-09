import React from "react";
import Affix from "./Affix";
import Button from "../Button/Button";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "导航/Affix",
  component: Affix,
} as ComponentMeta<typeof Affix>

const AffixTemplate: ComponentStory<typeof Affix> = (args) => {
  return (
    <div style={{ height: '1800px' }}>
      <Affix offsetBottom={20}>
        <Button>
          Affix Button
        </Button>
      </Affix>
    </div>
  );
};
export const AffixTpl = AffixTemplate.bind({});
AffixTpl.args = {
};
