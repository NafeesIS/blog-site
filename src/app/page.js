import Banner from "@/Banner/Banner";
import BannerGradient from "@/components/ui/BannerGradient";
import Container from "@/components/ui/Container";

export default function Home() {
    return (
        <main>
            <Container className="relative">
                <Banner />
                <BannerGradient />
            </Container>
        </main>
    );
}
