import { Suspense } from "react";
import { SpinnerContainer } from "../SpinnerContainer";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
(
  <Suspense fallback={<SpinnerContainer />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
