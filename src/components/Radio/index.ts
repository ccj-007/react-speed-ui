import originGroup from "./Group";
import RadioItem from "./Radio";

const Radio = RadioItem as any;
Radio.Group = originGroup;

export default Radio;

