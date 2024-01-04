import styles from "./features.module.scss";
import Card from "../../components/card/Card";

export function Features() {

    return (
        <>
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <Card title={"Fresh new layout"} text={"With Bootstrap 5, we've created a fresh new layout for this template!"} iconName={"collection"} />
                        <Card title={"Free to download"} text={"As always, Start Bootstrap has a powerful collectin of free templates."} iconName={"cloud-download"} />
                        <Card title={"Jumbotron hero header"} text={"The heroic part of this template is the jumbotron hero header!"} iconName={"card-heading"} />
                        <Card title={"Feature boxes"} text={"naWe've created some custom feature boxes using Bootstrap icons!ber"} iconName={"bootstrap"} />
                        <Card title={"Simple clean code"} text={"We keep our dependencies up to date and squash bugs as they come!"} iconName={"code"} />
                        <Card title={"A name you trust"} text={"Start Bootstrap has been the leader in free Bootstrap templates since 2013!"} iconName={"patch-check"} />
                        </div>
                </div>
            </section>
        </>
    );
}

export default Features