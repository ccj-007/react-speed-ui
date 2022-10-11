import originForm from './Form';
import FormItem from './FormItem';

export type FormProps = {
  Item: typeof FormItem;
};

const Form = originForm as any;
Form.Item = FormItem;

export default Form;
