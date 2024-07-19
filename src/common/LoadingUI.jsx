import clsx from "clsx";
import { useEffect } from "react";
import "./LoadingUI.css";
import ErrorContent from "./ErrorUI";
import LoadingIndicator from "./LoadingIndicator";
import useDataRef from "hooks/useDataRef";

/**
 *
 * @param {LoadingUIProps} props
 * @returns
 */
function LoadingUI(props) {
  /**
   * @type {LoadingUIProps}
   */
  const resolvedProps = {
    component: "div",
    ...props,
    slots: { loading: Loading, error: Error, ...props.slots },
    slotProps: { ...props.slotProps },
    slotRenderers: {
      loading: renderLoading,
      error: renderError,
      ...props.slotRenderers,
    },
  };

  const {
    component,
    className,
    fullHeight,
    centered,
    onMount,
    loading,
    error,
    onRetry,
    children,
    slots,
    slotRenderers,
    slotProps,
    cancelText,
    onCancel,
    errorDescription,
    errorTitle,
    ...restProps
  } = resolvedProps;

  const dataRef = useDataRef({ onMount });

  useEffect(() => {
    dataRef.current.onMount?.();
  }, [dataRef]);

  if (!loading && !error) {
    return typeof children === "function" ? children() : children;
  }

  const Root = component;

  return (
    <Root
      className={clsx(
        "LoadingUI",
        className,
        fullHeight && "LoadingUI--fullHeight",
        centered && "LoadingUI--centered"
      )}
      {...restProps}
    >
      {error
        ? slotRenderers.error?.(resolvedProps)
        : slotRenderers.loading?.(resolvedProps)}
    </Root>
  );
}

export default LoadingUI;

function Loading(props) {
  return (
    <div {...props}>
      <LoadingIndicator />
    </div>
  );
}

/**
 *
 * @param {LoadingUIProps} props
 */
function renderLoading(props) {
  const Loading = props.slots?.loading;
  const loadingProps = props.slotProps?.loading;

  return (
    <Loading
      {...loadingProps}
      className={clsx("LoadingUI-loading", loadingProps?.className)}
    />
  );
}

/**
 *
 * @param {LoadingUIProps} props
 */
function Error(props) {
  return <ErrorContent {...props} />;
}

/**
 *
 * @param {LoadingUIProps} props
 */
function renderError(props) {
  const Error = props.slots?.error;
  const errorProps = props.slotProps?.error;

  return (
    <Error
      onRetry={props.onRetry}
      {...errorProps}
      className={clsx("LoadingUI-error", errorProps?.className)}
    />
  );
}

/**
 * @typedef {{
 * component: any;
 * slots: LoadingUISlots;
 * slotProps: LoadingUISlotProps;
 * slotRenderers: LoadingUISlotRenderers;
 * fullHeight: boolean;
 * centered: boolean;
 * children: React.ReactNode | (props: LoadingUIProps) => React.ReactNode,
 * loading: boolean;
 * error: boolean;
 * errorTitle:  React.ReactNode;
 * errorDescription:  React.ReactNode;
 * onMount: () => void;
 * onRetry: () => void;
 * onCancel: () => void;
 * cancelText: string;
 * } & React.ComponentPropsWithoutRef<'div'>} LoadingUIProps
 */

/**
 * @typedef {{
 * loading: import("react").ElementType<any, keyof JSX.IntrinsicElements> | ((props: LoadingUIProps) => import("react").ElementType<any, keyof JSX.IntrinsicElements>);
 * error: import("react").ElementType<any, keyof JSX.IntrinsicElements> | ((props: LoadingUIProps) => import("react").ElementType<any, keyof JSX.IntrinsicElements>);
 * }} LoadingUISlots
 */

/**
 * @typedef {{
 * loading: any;
 * error: any;
 * }} LoadingUISlotProps
 */

/**
 * @typedef {{
 * loading: (props: LoadingUIProps) => import("react").ReactNode;
 * error: (props: LoadingUIProps) => import("react").ReactNode;
 * }} LoadingUISlotRenderers
 */
