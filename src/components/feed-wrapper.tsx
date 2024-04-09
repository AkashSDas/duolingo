import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export function FeedWrapper(props: Props): React.JSX.Element {
    return <div className="flex-1 relative top-0 pb-10">{props.children}</div>;
}
