import { PageAuth } from './../../../lib/firebase/types';
import { ComponentPropsWithoutRef } from "react";

export default interface PageProps extends ComponentPropsWithoutRef<'main'> {
  auth?: PageAuth;
}