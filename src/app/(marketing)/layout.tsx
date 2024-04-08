import { Footer } from "./footer";
import { Header } from "./header";

type Props = React.PropsWithChildren<{}>;

export default function MarketingPageLayout(props: Props): React.JSX.Element {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1 flex flex-col justify-center items-center">
                {props.children}
            </main>

            <Footer />
        </div>
    );
}
