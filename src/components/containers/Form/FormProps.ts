import { ComponentProps, ReactElement } from "react";

export default interface FormProps extends ComponentProps<'form'> {
  title?: string;
  buttons: ReactElement|ReactElement[]|HTMLElement|HTMLElement[];
}